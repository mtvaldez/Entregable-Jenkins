console.log("Página cargada correctamente.");

document.addEventListener("DOMContentLoaded", function() {
    // Entregable 2 HTML files
    const entregable2Files = [
        { name: "Empaquetado.html", path: "http://localhost:8080/job/ultimoE/lastSuccessfulBuild/artifact/entregable2/entregable2/Empaquetado.html" },
        { name: "Envio.html", path: "http://localhost:8080/job/ultimoE/lastSuccessfulBuild/artifact/entregable2/entregable2/Envio.html" },
        { name: "Pago.html", path: "http://localhost:8080/job/ultimoE/lastSuccessfulBuild/artifact/entregable2/entregable2/Pago.html" },
        { name: "Pedido.html", path: "http://localhost:8080/job/ultimoE/lastSuccessfulBuild/artifact/entregable2/entregable2/Pedido.html" },
        { name: "ThreadPool.html", path: "http://localhost:8080/job/ultimoE/lastSuccessfulBuild/artifact/entregable2/entregable2/ThreadPool.html" },
    ];

    const buttonsContainer = document.getElementById("entregable2-buttons");

    entregable2Files.forEach(file => {
        const button = document.createElement("button");
        button.textContent = file.name;
        button.onclick = () => window.open(file.path, '_blank');
        buttonsContainer.appendChild(button);
    });
});
