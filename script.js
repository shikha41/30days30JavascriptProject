const generateBtn = document.getElementById("generate");
const length = 12;

generateBtn.addEventListener("click", () => {
  const password = generateRandomPassword(length);
  document.getElementById("password").value = password;
});

document.getElementById("copy").addEventListener("click", () => {
  const password = document.getElementById("password").value;
  navigator.clipboard.writeText(password);
});

function generateRandomPassword(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?";
  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  return password;
}
