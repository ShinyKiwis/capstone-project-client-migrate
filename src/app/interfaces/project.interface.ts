interface ProjectProps {
	code: number;
	name: string;
	status: string;
	description: string;
	tasks: string;
	references: string;
	branches: {
		id: number;
		name: string;
	}[];
	majors: {
		id: number;
		name: string;
	}[];
	supervisors: {
		id: number;
		email: string;
		username: string;
		name: string;
	}[];
	studentsCount: number;
	students: Student[];
	limit: number;
}
