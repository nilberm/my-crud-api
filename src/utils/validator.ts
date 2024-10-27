function validateUserData(user: Partial<{ name: string; email: string }>): boolean {
  if (!user.name || typeof user.name !== 'string') throw new Error('Invalid name');
  if (!user.email || typeof user.email !== 'string') throw new Error('Invalid email');
  return true;
}

export { validateUserData };
