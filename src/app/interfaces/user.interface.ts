type Role = {
	id: number | string,
	name: string
}

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
		code: number,
	}
}

interface User_ManageTable extends Pick<User, 'id'|'name'|'email'|'roles'> {}