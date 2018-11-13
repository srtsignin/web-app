export class User {
  token: string;
  fullname: string;
  username: string;
  roles: string[];

  getRoles() {
    let roles = '';
    for (let i = 0; i < this.roles.length; i++) {
      roles = roles.concat(this.roles[i] + ', ');
    }
    return roles.substring(0, roles.length - 2);
  }
}
