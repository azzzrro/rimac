interface ProductSpecs {
  [key: string]: string;
}

export interface Product {
  id: number;
  name: string;
  images: string[];
  subcategory: string;
  specs?: ProductSpecs;
}

interface CategoryData {
  title: string;
  description: string;
  subcategories: string[];
  products: Product[];
  color: string;
}

export const categoryData: Record<string, CategoryData> = {
  "building-materials": {
    title: "Building Materials",
    description: "High-quality materials for your construction needs",
    subcategories: [
      "All",
      "Insulation & Concrete Work Accessories",
      "Block Work & Plastering Accessories",
    ],
    products: [
      {
        id: 1,
        name: "Burlap",
        images: [
          "/building-materials/Insulation_and_conrete_work_acc/Burlap.png",
        ],
        subcategory: "Insulation & Concrete Work Accessories",
      },
      {
        id: 2,
        name: "Polyethylene Sheet",
        images: [
          "/building-materials/Insulation_and_conrete_work_acc/Polyethylene Sheet.png",
        ],
        subcategory: "Insulation & Concrete Work Accessories",
      },
      {
        id: 3,
        name: "Hyperseal DP",
        images: [
          "/building-materials/Insulation_and_conrete_work_acc/Hyperseal DP.png",
        ],
        subcategory: "Insulation & Concrete Work Accessories",
      },
      {
        id: 4,
        name: "PVC Water Stop",
        images: [
          "/building-materials/Insulation_and_conrete_work_acc/PVC Water Stop.png",
        ],
        subcategory: "Insulation & Concrete Work Accessories",
      },
      {
        id: 5,
        name: "Geotextile",
        images: [
          "/building-materials/Insulation_and_conrete_work_acc/Geotextile.png",
        ],
        subcategory: "Insulation & Concrete Work Accessories",
      },
      {
        id: 6,
        name: "Protection Board",
        images: [
          "/building-materials/Insulation_and_conrete_work_acc/Protection Board.png",
        ],
        subcategory: "Insulation & Concrete Work Accessories",
      },
      {
        id: 7,
        name: "Extruded Polystyrene",
        images: [
          "/building-materials/Insulation_and_conrete_work_acc/Extruded Polystyrene.png",
        ],
        subcategory: "Insulation & Concrete Work Accessories",
      },
      {
        id: 8,
        name: "Stud & Runner",
        images: [
          "/building-materials/Insulation_and_conrete_work_acc/Stud & Runner.png",
        ],
        subcategory: "Insulation & Concrete Work Accessories",
      },
      {
        id: 9,
        name: "Cork Sheet",
        images: [
          "/building-materials/Insulation_and_conrete_work_acc/Cork Sheet.png",
        ],
        subcategory: "Insulation & Concrete Work Accessories",
      },
      {
        id: 10,
        name: "Concrete Spacers",
        images: [
          "/building-materials/Insulation_and_conrete_work_acc/Concrete Spacers.png",
        ],
        subcategory: "Insulation & Concrete Work Accessories",
      },
      {
        id: 11,
        name: "Plastic spacers",
        images: [
          "/building-materials/Insulation_and_conrete_work_acc/Plastic spacers.png",
        ],
        subcategory: "Insulation & Concrete Work Accessories",
      },
      {
        id: 12,
        name: "Protection Board",
        images: [
          "/building-materials/Insulation_and_conrete_work_acc/Protection Board_2.png",
        ],
        subcategory: "Insulation & Concrete Work Accessories",
      },
      {
        id: 13,
        name: "The Rod & Accessories",
        images: [
          "/building-materials/Insulation_and_conrete_work_acc/Tie rod and acc.png",
        ],
        subcategory: "Insulation & Concrete Work Accessories",
      },
      {
        id: 14,
        name: "Block Ladder",
        images: [
          "/building-materials/block_work_&_plastering_acc/Block Ladder.png",
        ],
        subcategory: "Block Work & Plastering Accessories",
      },
      {
        id: 15,
        name: "Truss Type",
        images: [
          "/building-materials/block_work_&_plastering_acc/Truss Type.png",
        ],
        subcategory: "Block Work & Plastering Accessories",
      },
      {
        id: 16,
        name: "Steel Lintel & Angle",
        images: [
          "/building-materials/block_work_&_plastering_acc/Steel Lintel & Angle.png",
        ],
        subcategory: "Block Work & Plastering Accessories",
      },
      {
        id: 17,
        name: "Corner Mesh",
        images: [
          "/building-materials/block_work_&_plastering_acc/Corner Mesh.png",
        ],
        subcategory: "Block Work & Plastering Accessories",
      },
      {
        id: 18,
        name: "Corner Bead",
        images: [
          "/building-materials/block_work_&_plastering_acc/Corner Bead.png",
        ],
        subcategory: "Block Work & Plastering Accessories",
      },
      {
        id: 19,
        name: "Plaster Stop",
        images: [
          "/building-materials/block_work_&_plastering_acc/Plaster Stop.png",
        ],
        subcategory: "Block Work & Plastering Accessories",
      },
      {
        id: 20,
        name: "Architrave Bead",
        images: [
          "/building-materials/block_work_&_plastering_acc/Architrave Bead.png",
        ],
        subcategory: "Block Work & Plastering Accessories",
      },
      {
        id: 21,
        name: "Archetrave Bead Double Side Mesh",
        images: [
          "/building-materials/block_work_&_plastering_acc/Archetrave Bead Double Side Mesh.png",
        ],
        subcategory: "Block Work & Plastering Accessories",
      },
      {
        id: 22,
        name: "Control Joint",
        images: [
          "/building-materials/block_work_&_plastering_acc/Control Joint.png",
        ],
        subcategory: "Block Work & Plastering Accessories",
      },
    ],
    color: "blue",
  },
  "fire-safety": {
    title: "Fire Safety Equipment",
    description:
      "Protect your premises with our certified fire safety products",
    subcategories: ["All"],
    products: [
      {
        id: 1,
        name: "ABC Dry Powder Fire Extinguisher",
        images: [
          "https://images.unsplash.com/photo-1672541298906-4aeb3edd3520?q=80&w=3269&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1672541298906-4aeb3edd3520?q=80&w=3269&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1672541298906-4aeb3edd3520?q=80&w=3269&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ],
        subcategory: "Fire Extinguishers",
        specs: {
          capacity: "6kg",
          type: "ABC Powder",
          coverage: "13A/70B",
        },
      },
      // Add more products
    ],
    color: "red",
  },
  scaffolding: {
    title: "Scaffolding Solutions",
    description:
      "Safe and reliable scaffolding for all your construction projects",
    subcategories: [
      "All",
      "Frame Scaffolding",
      "System Scaffolding",
      "Suspended Scaffolding",
      "Mobile Scaffolding",
    ],
    products: [
      {
        id: 1,
        name: "Frame Scaffold Set",
        images: [
          "https://images.unsplash.com/photo-1672541298906-4aeb3edd3520?q=80&w=3269&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1672541298906-4aeb3edd3520?q=80&w=3269&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "https://images.unsplash.com/photo-1672541298906-4aeb3edd3520?q=80&w=3269&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        ],
        subcategory: "Frame Scaffolding",
        specs: {
          height: "Adjustable",
          material: "Steel",
          capacity: "750kg/m²",
        },
      },
      // Add more products
    ],
    color: "green",
  },
};
