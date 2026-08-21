function trocarIframe(numero, event) {
    const iframe = document.getElementById("meuIframePrincipal");

    if (numero === 1) {
        iframe.src = "https://momento360.com/e/u/8511781aa57b480f8355652ad4291988?utm_campaign=embed&utm_source=other&utm_medium=embed&heading=279.02&pitch=29.61&field-of-view=75&size=medium&display-plan=true";
    } else if (numero === 2) {
        iframe.src = "https://momento360.com/e/u/44a772134d0948f781ba28c26685105a?utm_campaign=embed&utm_source=other&utm_medium=embed&heading=-124.34&pitch=46.95&field-of-view=88&size=medium&display-plan=true";
    }

    if (event) {
        const miniaturas = document.querySelectorAll(".img-mini img");

        miniaturas.forEach(img => img.classList.remove("active"));
        
        event.currentTarget.classList.add("active");
    }
}