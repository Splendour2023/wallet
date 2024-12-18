document.addEventListener("DOMContentLoaded", () => {
    const sendButton = document.getElementById("send-funds");
    const receiveButton = document.getElementById("receive-funds");
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modal-title");
    const closeModal = document.querySelector(".close");
    const modalForm = document.getElementById("modal-form");

    // Open Modal
    const openModal = (type) => {
        modal.style.display = "flex";
        modalTitle.innerText = type === "send" ? "Send Funds" : "Receive Funds";
    };

    // Close Modal
    const closeModalHandler = () => {
        modal.style.display = "none";
    };

    sendButton.addEventListener("click", () => openModal("send"));
    receiveButton.addEventListener("click", () => openModal("receive"));
    closeModal.addEventListener("click", closeModalHandler);

    // Form Submission
    modalForm.addEventListener("submit", (e) => {
        e.preventDefault();
        alert(`${modalTitle.innerText} completed!`);
        modal.style.display = "none";
    });

    // Close modal on outside click
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            closeModalHandler();
        }
    });
});
