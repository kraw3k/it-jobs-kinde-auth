export const users: {
  email: string;
  firstName: string;
  lastName: string;
  kindeId: string;
  avatarUrl: string;
  role: "USER" | "EMPLOYER" | "ADMIN" | undefined;
}[] = [
  {
    email: "kacper5047@gmail.com",
    firstName: "Kacper",
    lastName: "K",
    kindeId: "kp_0feb56eed52845c8ab10a140ddb76775",
    avatarUrl:
      "https://www.shareicon.net/data/512x512/2015/09/18/103160_man_512x512.png",
    role: "EMPLOYER",
  },
  {
    email: "qnc56831@romog.com",
    firstName: "Mateusz",
    lastName: "Kowalski",
    kindeId: "id_mat_kowalski_2000",
    avatarUrl: "https://www.shareicon.net/data/512x512/2015/09",
    role: "USER",
  },
];
