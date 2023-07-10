export default function capitalizeString(str) {
  if (typeof str !== "string") return;
  return str.split("")[0].toUpperCase() + str.split("").slice(1).join("");
}
