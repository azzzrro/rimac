import buildingMaterials from "./buildingMaterials.json";
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
      "Materials For Construction",
      "Plywood & Timber",
      "Gypsum & Partitioning Solutions",
      "Architectural Engineering Solutions",
      "Cable Management System",
    ],
    products: buildingMaterials,
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
        name: "Rigid Coupling",
        images: [
          "/fire-safety/rigid-coupling/rigid-coupling_1.png",
          "/fire-safety/rigid-coupling/rigid-coupling_2.png",
          "/fire-safety/rigid-coupling/rigid-coupling_3.png",
        ],
        subcategory: "Ductile Iron Grooved Fittings and Couplings",
        specs: {
          type: "XGTQ1",
        },
      },
      {
        id: 2,
        name: "Flexible Coupling",
        images: [
          "/fire-safety/flexible-coupling/flexible-coupling_1.png",
          "/fire-safety/flexible-coupling/flexible-coupling_2.png",
          "/fire-safety/flexible-coupling/flexible-coupling_3.png",
        ],
        subcategory: "Ductile Iron Grooved Fittings and Couplings",
        specs: {
          type: "XGTQ2",
        },
      },
      {
        id: 3,
        name: "Angle Coupling",
        images: [
          "/fire-safety/angle-coupling/angle-coupling_1.png",
          "/fire-safety/angle-coupling/angle-coupling_2.png",
          "/fire-safety/angle-coupling/angle-coupling_3.png",
        ],
        subcategory: "Ductile Iron Grooved Fittings and Couplings",
      },
      {
        id: 4,
        name: "90 Elbow",
        images: [
          "/fire-safety/90-elbow/90-elbow_1.png",
          "/fire-safety/90-elbow/90-elbow_2.png",
          "/fire-safety/90-elbow/90-elbow_3.png",
          "/fire-safety/90-elbow/90-elbow_4.png",
          "/fire-safety/90-elbow/90-elbow_5.png",
        ],
        subcategory: "Ductile Iron Grooved Fittings and Couplings",
        specs: {
          type: "XGQT01",
          size: "Short, Standard",
        },
      },
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
