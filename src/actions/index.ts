import { defineAction, ActionError } from "astro:actions";
import { z } from "astro:schema";
import { Resend } from "resend";

export const server = {
  /**
   * Envía una solicitud de presupuesto al correo de Pulimentos Jiménez vía Resend.
   * accept: "form" permite enviarlo como <form method="POST"> con mejora progresiva.
   */
  presupuesto: defineAction({
    accept: "form",
    input: z.object({
      nombre: z.string().min(2, "Indica tu nombre"),
      telefono: z.string().min(6, "Indica un teléfono válido"),
      email: z.string().email("Email no válido").optional().or(z.literal("")),
      ciudad: z.string().optional(),
      tipoSuelo: z.string().optional(),
      metros: z.string().optional(),
      mensaje: z.string().optional(),
      // Honeypot anti-spam: debe llegar vacío.
      website: z.string().max(0).optional(),
    }),
    handler: async (input) => {
      // Bot detectado por honeypot → respondemos OK sin enviar nada.
      if (input.website) return { ok: true };

      const apiKey = import.meta.env.RESEND_API_KEY;
      const to = import.meta.env.LEADS_TO_EMAIL || "info@pulimentosjimenez.es";
      const from = import.meta.env.LEADS_FROM_EMAIL || "web@pulimentosjimenez.es";

      if (!apiKey) {
        throw new ActionError({
          code: "INTERNAL_SERVER_ERROR",
          message:
            "El envío de correo no está configurado todavía (falta RESEND_API_KEY).",
        });
      }

      const resend = new Resend(apiKey);

      const html = `
        <h2>Nueva solicitud de presupuesto</h2>
        <ul>
          <li><strong>Nombre:</strong> ${escapeHtml(input.nombre)}</li>
          <li><strong>Teléfono:</strong> ${escapeHtml(input.telefono)}</li>
          <li><strong>Email:</strong> ${escapeHtml(input.email || "—")}</li>
          <li><strong>Ciudad:</strong> ${escapeHtml(input.ciudad || "—")}</li>
          <li><strong>Tipo de suelo:</strong> ${escapeHtml(input.tipoSuelo || "—")}</li>
          <li><strong>Metros aprox.:</strong> ${escapeHtml(input.metros || "—")}</li>
        </ul>
        <p><strong>Mensaje:</strong><br>${escapeHtml(input.mensaje || "—")}</p>
      `;

      const { error } = await resend.emails.send({
        from: `Web Pulimentos Jiménez <${from}>`,
        to: [to],
        replyTo: input.email || undefined,
        subject: `Presupuesto web — ${input.nombre} (${input.ciudad || "sin ciudad"})`,
        html,
      });

      if (error) {
        throw new ActionError({
          code: "INTERNAL_SERVER_ERROR",
          message: "No se pudo enviar el correo. Inténtalo de nuevo o llámanos.",
        });
      }

      return { ok: true };
    },
  }),
};

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
