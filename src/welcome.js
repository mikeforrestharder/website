export class Welcome {
  heading = 'Welcome, Wanderers.';
  firstName = 'Mike';
  lastName = 'Harder';

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  submit() {
    alert(`Welcome, ${this.fullName}!`);
  }
}
