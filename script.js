document.getElementById('check-password-btn').addEventListener('click', function () {
    let password = prompt("Enter a password (at least 8 characters, with a number and special symbol):");

    // If the user cancels or leaves the prompt empty
    if (!password) {
        Swal.fire("Error", "Password cannot be empty!", "error");
        return; // Stop further execution
    } 

    // Validate the password
    if (password.length < 8) {
        Swal.fire("Invalid Password", "Password must be at least 8 characters long.", "error");
    } 
    else if (!/[0-9]/.test(password)) {
        Swal.fire("Invalid Password", "Password must contain at least one number.", "error");
    } 
    else if (!/[@#&]/.test(password)) {
        Swal.fire("Invalid Password", "Password must contain at least one special symbol (@, #, &).", "error");
    } 
    else {
        Swal.fire("Success", "Password accepted!", "success");
        document.getElementById('result').textContent = "Password accepted!";
    }
});
