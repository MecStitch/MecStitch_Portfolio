function abrirEmailGmail() {
    var destinatario = "eudesjw@gmail.com";

    var url = "https://mail.google.com/mail/?view=cm&fs=1&to=" + encodeURIComponent(destinatario);
    window.open(url, "_blank");
}