export function createUserToken(userType: 1 | 2): string {
  if (userType !== 1 && userType !== 2) {
    throw new Error("Invalid user type. Use 1 for user and 2 for admin.");
  }
  const prefix = userType === 1 ? "user_" : "admin_";
  const uniquePart = Math.random().toString(36).substring(2, 10);
  return `${prefix}${uniquePart}`;
}
