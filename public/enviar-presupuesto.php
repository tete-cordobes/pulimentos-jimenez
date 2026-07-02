<?php
/**
 * Procesa el formulario de presupuesto de Pulimentos y Aplicaciones Jiménez.
 * Se ejecuta en el hosting cPanel (LucusHost). Envía el email con la función
 * mail() nativa de PHP y redirige de vuelta a /contacto/ con el resultado.
 *
 * Si algún día el correo acaba en spam, migrar a SMTP autenticado (PHPMailer)
 * con una cuenta del propio dominio.
 */

// ---- Configuración -------------------------------------------------------
$to           = 'info@pulimentosjimenez.es';        // destinatario de los leads
$from         = 'web@pulimentosjimenez.es';          // remitente (cuenta del dominio)
$redirect     = '/contacto/';                        // página del formulario

// ---- Solo POST -----------------------------------------------------------
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: ' . $redirect);
    exit;
}

// ---- Honeypot anti-spam: si viene relleno, fingimos OK y no enviamos ------
if (!empty($_POST['website'])) {
    header('Location: ' . $redirect . '?enviado=1');
    exit;
}

// ---- Recogida y saneado de campos ---------------------------------------
function campo($clave) {
    return isset($_POST[$clave]) ? trim(substr($_POST[$clave], 0, 2000)) : '';
}

$nombre    = campo('nombre');
$telefono  = campo('telefono');
$email     = campo('email');
$ciudad    = campo('ciudad');
$tipoSuelo = campo('tipoSuelo');
$metros    = campo('metros');
$mensaje   = campo('mensaje');

// ---- Validación mínima (igual que la del formulario) ---------------------
if (mb_strlen($nombre) < 2 || mb_strlen($telefono) < 6) {
    header('Location: ' . $redirect . '?error=1');
    exit;
}

// ---- Composición del email ----------------------------------------------
$ciudadTxt = $ciudad !== '' ? $ciudad : 'sin ciudad';
$subject   = "Presupuesto web — $nombre ($ciudadTxt)";

$body  = "Nueva solicitud de presupuesto desde la web\n";
$body .= "-------------------------------------------\n\n";
$body .= "Nombre:         $nombre\n";
$body .= "Teléfono:       $telefono\n";
$body .= 'Email:          ' . ($email !== ''     ? $email     : '—') . "\n";
$body .= 'Ciudad:         ' . ($ciudad !== ''    ? $ciudad    : '—') . "\n";
$body .= 'Tipo de suelo:  ' . ($tipoSuelo !== '' ? $tipoSuelo : '—') . "\n";
$body .= 'Metros aprox.:  ' . ($metros !== ''    ? $metros    : '—') . "\n\n";
$body .= "Mensaje:\n" . ($mensaje !== '' ? $mensaje : '—') . "\n";

// ---- Cabeceras -----------------------------------------------------------
$headers  = 'From: Web Pulimentos Jiménez <' . $from . ">\r\n";
if ($email !== '' && filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $headers .= 'Reply-To: ' . $email . "\r\n";
}
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Asunto codificado en UTF-8 (para que los acentos no se rompan)
$subjectEnc = '=?UTF-8?B?' . base64_encode($subject) . '?=';

// ---- Envío ---------------------------------------------------------------
$enviado = @mail($to, $subjectEnc, $body, $headers, '-f' . $from);

header('Location: ' . $redirect . ($enviado ? '?enviado=1' : '?error=1'));
exit;
