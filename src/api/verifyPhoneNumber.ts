export const verifyService = (phoneNumber: string) => {
  return new Promise<{ data: string }>((resolve, reject) => {
    setTimeout(() => {
      if (phoneNumber.length < 9) {
        reject('Invalid phone number');
      } else {
        resolve({ data: phoneNumber });
      }
    }, 2000);
  });
};
