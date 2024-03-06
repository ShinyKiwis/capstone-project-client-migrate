interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  roles: Role[];
  credits: number;
  generation: number;
  GPA: number;
  enrolledAt: string;
  project?: {
    code: number;
  };
}

interface User_ManageTable
  extends Pick<User, "id" | "name" | "email" | "roles"> {}

type UserOptType = {
  name: string;
  id: string;
  email: string;
  [key: string]: any;
}

type Instructor = {
  id: number;
  email: string;
  username: string;
  name: string;
};

type Student = {
	user: User;
	userId: number;
	credits: number;
	generation: number;
	GPA: number;
	enrolledAt: string;
};