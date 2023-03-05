import { Timesheet } from "./../models/timesheet";

export const Rows: Timesheet[] = [
  {
    id: 1,
    hierarchy: ["employeeId#1"],
    employee: {
      id: 1,
      name: "John Travolta",
      job: "Worker"
    },
    summary: {
      status: "partial",
      cells: {
        monday: {
          time: "6h 30m",
          status: "approved",
          date: "MAR 14"
        },
        tuesday: {
          time: "6h 30m",
          status: "approved",
          date: "MAR 15"
        },
        wednesday: {
          time: "6h 30m",
          status: "approved",
          date: "MAR 16"
        },
        thursday: {
          time: "6h 30m",
          status: "approved",
          date: "MAR 17"
        },
        friday: {
          time: "6h 30m",
          status: "approved",
          date: "MAR 18"
        },
        saturday: {
          time: "6h 30m",
          status: "approved",
          date: "MAR 19"
        },
        sunday: {
          time: "6h 30m",
          status: "approved",
          date: "MAR 20"
        },
        overall: {
          time: "45h 30m",
          status: "approved"
        }
      }
    }
  },
  {
    id: 2,
    hierarchy: ["employeeId#1", "projectId#1"],
    employee: {
      id: 1,
      name: "John Travolta",
      job: "Worker"
    },
    summary: {
      status: "rejected",
      cells: {
        monday: {
          time: "3h 30m",
          status: "approved",
          date: "MAR 14"
        },
        tuesday: {
          time: "3h 30m",
          status: "approved",
          date: "MAR 15"
        },
        wednesday: {
          time: "3h 30m",
          status: "approved",
          date: "MAR 16"
        },
        thursday: {
          time: "3h 30m",
          status: "approved",
          date: "MAR 17"
        },
        friday: {
          time: "3h 30m",
          status: "approved",
          date: "MAR 18"
        },
        saturday: {
          time: "3h 30m",
          status: "approved",
          date: "MAR 19"
        },
        sunday: {
          time: "3h 30m",
          status: "approved",
          date: "MAR 20"
        },
        overall: {
          time: "24h 30m",
          status: "approved"
        }
      }
    },
    project: [
      {
        id: 1,
        label: "Project A",
        activities: "Drilling, Planning"
      }
    ]
  },
  {
    id: 3,
    hierarchy: ["employeeId#1", "projectId#2"],
    employee: {
      id: 1,
      name: "John Travolta",
      job: "Worker"
    },
    summary: {
      status: "approved",
      cells: {
        monday: {
          time: "3h",
          status: "approved",
          date: "MAR 14"
        },
        tuesday: {
          time: "3h",
          status: "approved",
          date: "MAR 15"
        },
        wednesday: {
          time: "3h",
          status: "approved",
          date: "MAR 16"
        },
        thursday: {
          time: "3h",
          status: "approved",
          date: "MAR 17"
        },
        friday: {
          time: "3h",
          status: "approved",
          date: "MAR 18"
        },
        saturday: {
          time: "3h",
          status: "approved",
          date: "MAR 19"
        },
        sunday: {
          time: "3h",
          status: "approved",
          date: "MAR 20"
        },
        overall: {
          time: "21h",
          status: "approved"
        }
      }
    },
    project: [
      {
        id: 2,
        label: "Project B",
        activities: "Drilling"
      }
    ]
  },
  {
    id: 4,
    hierarchy: ["employeeId#2"],
    employee: {
      id: 2,
      name: "Marry Poppins",
      job: "Worker"
    },
    summary: {
      status: "partial",
      cells: {
        monday: {
          time: "7h 30m",
          status: "approved",
          date: "MAR 14"
        },
        tuesday: {
          time: "8h",
          status: "approved",
          date: "MAR 15"
        },
        wednesday: {
          time: "9h",
          status: "approved",
          date: "MAR 16"
        },
        thursday: {
          time: "8h",
          status: "approved",
          date: "MAR 17"
        },
        friday: {
          time: "7h",
          status: "approved",
          date: "MAR 18"
        },
        saturday: {
          time: "8h 30m",
          status: "approved",
          date: "MAR 19"
        },
        sunday: {
          time: "-",
          status: "approved",
          date: "MAR 20"
        },
        overall: {
          time: "48h",
          status: "approved"
        }
      }
    }
  },
  {
    id: 5,
    hierarchy: ["employeeId#2", "projectId#1"],
    employee: {
      id: 2,
      name: "Marry Poppins",
      job: "Worker"
    },
    summary: {
      status: "partial",
      cells: {
        monday: {
          time: "2h 30m",
          status: "pending",
          date: "MAR 14"
        },
        tuesday: {
          time: "4h 30m",
          status: "pending",
          date: "MAR 15"
        },
        wednesday: {
          time: "5h",
          status: "pending",
          date: "MAR 16"
        },
        thursday: {
          time: "4h",
          status: "approved",
          date: "MAR 17"
        },
        friday: {
          time: "3h",
          status: "approved",
          date: "MAR 18"
        },
        saturday: {
          time: "4h",
          status: "approved",
          date: "MAR 19"
        },
        sunday: {
          time: "-",
          status: "approved",
          date: "MAR 20"
        },
        overall: {
          time: "23h",
          status: "approved"
        }
      }
    },
    project: [
      {
        id: 1,
        label: "Project A",
        activities: "Drilling, Planning"
      }
    ]
  },
  {
    id: 6,
    hierarchy: ["employeeId#2", "projectId#2"],
    employee: {
      id: 1,
      name: "Marry Poppins",
      job: "Worker"
    },
    summary: {
      status: "partial",
      cells: {
        monday: {
          time: "5h",
          status: "approved",
          date: "MAR 14"
        },
        tuesday: {
          time: "3h 30m",
          status: "approved",
          date: "MAR 15"
        },
        wednesday: {
          time: "4h",
          status: "approved",
          date: "MAR 16"
        },
        thursday: {
          time: "4h",
          status: "approved",
          date: "MAR 17"
        },
        friday: {
          time: "4h",
          status: "approved",
          date: "MAR 18"
        },
        saturday: {
          time: "4h 30m",
          status: "approved",
          date: "MAR 19"
        },
        sunday: {
          time: "-",
          status: "approved",
          date: "MAR 20"
        },
        overall: {
          time: "25h",
          status: "approved"
        }
      }
    },
    project: [
      {
        id: 3,
        label: "Project C",
        activities: "Planning"
      }
    ]
  },
  {
    id: 7,
    hierarchy: ["employeeId#3"],
    employee: {
      id: 1,
      name: "Christoph Waltz",
      job: "Supervisor"
    },
    summary: {
      status: "approved",
      cells: {
        monday: {
          time: "5h",
          status: "approved",
          date: "MAR 14"
        },
        tuesday: {
          time: "3h 30m",
          status: "approved",
          date: "MAR 15"
        },
        wednesday: {
          time: "7h 30m",
          status: "approved",
          date: "MAR 16"
        },
        thursday: {
          time: "9h 30m",
          status: "approved",
          date: "MAR 17"
        },
        friday: {
          time: "3h 45m",
          status: "approved",
          date: "MAR 18"
        },
        saturday: {
          time: "-",
          status: "approved",
          date: "MAR 19"
        },
        sunday: {
          time: "-",
          status: "approved",
          date: "MAR 20"
        },
        overall: {
          time: "31h 15m",
          status: "approved"
        }
      }
    }
  },
  {
    id: 8,
    hierarchy: ["employeeId#3", "projectId#1"],
    employee: {
      id: 1,
      name: "Christoph Waltz",
      job: "Supervisor"
    },
    summary: {
      status: "approved",
      cells: {
        monday: {
          time: "5h",
          status: "approved",
          date: "MAR 14"
        },
        tuesday: {
          time: "3h 30m",
          status: "approved",
          date: "MAR 15"
        },
        wednesday: {
          time: "7h 30m",
          status: "approved",
          date: "MAR 16"
        },
        thursday: {
          time: "9h 30m",
          status: "approved",
          date: "MAR 17"
        },
        friday: {
          time: "3h 45m",
          status: "approved",
          date: "MAR 18"
        },
        saturday: {
          time: "-",
          status: "approved",
          date: "MAR 19"
        },
        sunday: {
          time: "-",
          status: "approved",
          date: "MAR 20"
        },
        overall: {
          time: "31h 15m",
          status: "approved"
        }
      }
    },
    project: [
      {
        id: 1,
        label: "Project A",
        activities: "Drilling, Planning"
      }
    ]
  },
  {
    id: 9,
    hierarchy: ["employeeId#4"],
    employee: {
      id: 1,
      name: "Peter Griffin",
      job: "Worker"
    },
    summary: {
      status: "rejected",
      cells: {
        monday: {
          time: "10h",
          status: "approved",
          date: "MAR 14"
        },
        tuesday: {
          time: "14h",
          status: "rejected",
          date: "MAR 15"
        },
        wednesday: {
          time: "16h",
          status: "rejected",
          date: "MAR 16"
        },
        thursday: {
          time: "2h",
          status: "pending",
          date: "MAR 17"
        },
        friday: {
          time: "1h",
          status: "pending",
          date: "MAR 18"
        },
        saturday: {
          time: "-",
          status: "",
          date: "MAR 19"
        },
        sunday: {
          time: "-",
          status: "",
          date: "MAR 20"
        },
        overall: {
          time: "43h",
          status: "rejected"
        }
      }
    }
  },
  {
    id: 10,
    hierarchy: ["employeeId#4", "projectId#1"],
    employee: {
      id: 1,
      name: "Peter Griffin",
      job: "Worker"
    },
    summary: {
      status: "rejected",
      cells: {
        monday: {
          time: "10h",
          status: "approved",
          date: "MAR 14"
        },
        tuesday: {
          time: "14h",
          status: "rejected",
          date: "MAR 15"
        },
        wednesday: {
          time: "16h",
          status: "rejected",
          date: "MAR 16"
        },
        thursday: {
          time: "2h",
          status: "pending",
          date: "MAR 17"
        },
        friday: {
          time: "1h",
          status: "pending",
          date: "MAR 18"
        },
        saturday: {
          time: "-",
          status: "",
          date: "MAR 19"
        },
        sunday: {
          time: "-",
          status: "",
          date: "MAR 20"
        },
        overall: {
          time: "43h",
          status: "rejected"
        }
      }
    },
    project: [
      {
        id: 1,
        label: "Project D",
        activities: "Doing stuff"
      }
    ]
  }
];
