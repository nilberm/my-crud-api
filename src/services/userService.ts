import User from '../models/User';

class UserService {
  private users: User[] = [];

  async createUser(user: User): Promise<User> {
    this.users.push(user);
    return user;
  }

  async getUsers(): Promise<User[]> {
    return this.users;
  }

  async getUserById(id: number): Promise<User | undefined> {
    return this.users.find(user => user.id === id);
  }

  async updateUser(id: number, updatedUser: Partial<User>): Promise<User | null> {
    const user = await this.getUserById(id);
    if (!user) return null;

    Object.assign(user, updatedUser);
    return user;
  }

  async deleteUser(id: number): Promise<boolean> {
    const index = this.users.findIndex(user => user.id === id);
    if (index === -1) return false;

    this.users.splice(index, 1);
    return true;
  }
}

export default new UserService();
