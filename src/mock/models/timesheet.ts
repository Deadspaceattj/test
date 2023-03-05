export interface EmployeeExcerpt {
  id: number;
  name: string;
  job: string;
}

export interface Day {
  time: string;
  status: string;
  date: string;
}

export interface Overall {
  time: string;
  status: string;
}

export interface Cells {
  monday: Day;
  tuesday: Day;
  wednesday: Day;
  thursday: Day;
  friday: Day;
  saturday: Day;
  sunday: Day;
  overall: Overall;
}

export interface Summary {
  status: string;
  cells: Cells;
}

export interface Project {
  id: number;
  label: string;
  activities: string;
}

export interface Timesheet {
  id: number;
  hierarchy: string[];
  employee: EmployeeExcerpt;
  summary: Summary;
  project?: Project[];
}
