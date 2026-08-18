export type WorkPhoto = {
  src: string;
  alt: string;
  title: string;
  category: "Agricultural" | "Plant" | "Servicing" | "Breakdown" | "Diagnostics" | "Workshop";
  position?: string;
};

export const workPhotos: WorkPhoto[] = [
  {src:"/work/night-breakdown-support.jpg",alt:"Night-time agricultural machinery breakdown support",title:"Out-of-hours breakdown support",category:"Breakdown",position:"center 58%"},
  {src:"/work/engine-overhaul-john-deere.jpg",alt:"John Deere engine stripped for major mechanical repair",title:"Major engine repairs",category:"Workshop",position:"center 52%"},
  {src:"/work/john-deere-service-parts.jpg",alt:"John Deere tractor undergoing a full service with oils and filters",title:"Routine servicing & maintenance",category:"Servicing"},
  {src:"/work/jcb-field-repair.jpg",alt:"JCB telehandler undergoing field repair",title:"Plant & telehandler repairs",category:"Plant"},
  {src:"/work/air-conditioning-new-holland-01.jpg",alt:"New Holland tractor connected to air conditioning service equipment",title:"Air conditioning service",category:"Diagnostics"},
  {src:"/work/john-deere-workshop-repair.jpg",alt:"John Deere tractor undergoing workshop repair",title:"Agricultural mechanical repairs",category:"Agricultural"},
  {src:"/work/field-service-new-holland.jpg",alt:"New Holland tractor with mobile service vehicle in the field",title:"Mobile field service",category:"Agricultural"},
  {src:"/work/harvest-support-sunset.jpg",alt:"Agricultural harvesting machinery working at sunset",title:"Seasonal & harvest support",category:"Agricultural"},
  {src:"/work/specialist-machinery-workshop.jpg",alt:"Specialist agricultural machinery in a workshop",title:"Specialist machinery support",category:"Workshop"},
  {src:"/work/implement-repair.jpg",alt:"Agricultural implement undergoing repair",title:"Implement repairs",category:"Agricultural"},
  {src:"/work/breakdown-damaged-cab.jpg",alt:"Damaged agricultural machine cab requiring repair",title:"Breakdown damage assessment",category:"Breakdown"},
  {src:"/work/engine-repair-plant-01.jpg",alt:"Engine being removed from yellow plant machinery for repair",title:"Engine removal & repair",category:"Plant"},
  {src:"/work/engine-repair-plant-02.jpg",alt:"Plant machinery engine undergoing repair",title:"Plant engine repairs",category:"Plant"},
  {src:"/work/john-deere-6430-field.jpg",alt:"John Deere 6430 agricultural tractor",title:"Agricultural machinery support",category:"Agricultural"},
  {src:"/work/air-conditioning-new-holland-02.jpg",alt:"Air conditioning service machine connected to a New Holland tractor",title:"A/C diagnostics & service",category:"Diagnostics"},
  {src:"/work/mobile-service-van.jpg",alt:"Mobile agricultural service van set up on site",title:"Mobile service capability",category:"Workshop"},
  {src:"/work/mobile-workshop-van-01.jpg",alt:"Fully equipped mobile agricultural engineering van",title:"Field service ready",category:"Workshop"},
  {src:"/work/mobile-workshop-van-02.jpg",alt:"Mobile engineering van with tools and equipment",title:"Mobile engineering support",category:"Workshop"},
  {src:"/work/mobile-workshop-van-03.jpg",alt:"Mobile repair van on an agricultural site",title:"On-site repairs",category:"Workshop"},
  {src:"/work/mobile-workshop-van-04.jpg",alt:"Equipped agricultural engineering service van",title:"Equipped for field work",category:"Workshop"},
  {src:"/work/mobile-workshop-van-05.jpg",alt:"Mobile workshop van beside agricultural machinery",title:"Field repair support",category:"Workshop"},
  {src:"/work/mobile-workshop-van-06.jpg",alt:"Agricultural engineering van on site",title:"Mobile workshop",category:"Workshop"},
];

export function photosFor(...categories: WorkPhoto["category"][]) {
  return workPhotos.filter((photo) => categories.includes(photo.category));
}
