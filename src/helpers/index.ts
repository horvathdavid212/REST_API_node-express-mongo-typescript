import crypto from "crypto";

const SECRET =
  "titkos kulcs vagy jelszó, amelyet a kód a crypto.createHmac függvény használatakor használ fel";

export const random = () => crypto.randomBytes(128).toString("base64");
export const authentification = (salt: string, password: string) => {
  return crypto
    .createHmac("sha256", [salt, password].join("/"))
    .update(SECRET)
    .digest("hex");
};
