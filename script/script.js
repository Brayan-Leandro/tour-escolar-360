function trocarIframe(numero, event) {
    const iframe = document.getElementById("meuIframePrincipal");

    if (numero === 1) {
        iframe.src = "https://momento360.com/e/u/8511781aa57b480f8355652ad4291988?utm_campaign=embed&utm_source=other&utm_medium=embed&heading=279.02&pitch=29.61&field-of-view=75&size=medium&display-plan=true";
    } else if (numero === 2) {
        iframe.src = "https://momento360.com/e/u/44a772134d0948f781ba28c26685105a?utm_campaign=embed&utm_source=other&utm_medium=embed&heading=-124.34&pitch=46.95&field-of-view=88&size=medium&display-plan=true";
    } else if (numero === 3) {
        iframe.src = "https://momento360.com/e/u/487bfaab22d34c7e9178e101a631740d?utm_campaign=embed&utm_source=other&utm_medium=embed&heading=316.23&pitch=-6.05&field-of-view=75&size=medium&display-plan=true";
    } else if (numero === 4) {
        iframe.src = "https://momento360.com/e/u/104a843d879e48b6b42d55767be4336c?utm_campaign=embed&utm_source=other&utm_medium=embed&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true";
    } else if (numero === 5) {
        iframe.src = "https://momento360.com/e/u/186d28e4a334415cbbb41321fed6e41f?utm_campaign=embed&utm_source=other&utm_medium=embed&heading=219.21&pitch=-33.13&field-of-view=75&size=medium&display-plan=true";
    } else if (numero === 6) {
        iframe.src = "https://momento360.com/e/u/c5d1c5497016406ba33c9bb30b3ea72e?utm_campaign=embed&utm_source=other&utm_medium=embed&heading=0&pitch=0&field-of-view=75&size=medium&display-plan=true";
    }

    if (event) {
        const miniaturas = document.querySelectorAll(".img-mini img");

        miniaturas.forEach(img => img.classList.remove("active"));

        event.currentTarget.classList.add("active");
    }
}