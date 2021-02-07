export class OrderModel {

  id:string;
  date: {
  nanoseconds: number,
  seconds: number
};
  phone:string;
  firstName: string;
  lastName: string;
  type: number;
  examined: boolean;
  email? :string;
  dob: Date;

}
