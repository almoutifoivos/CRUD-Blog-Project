import greeceImage from "../images/greece.jpg";
import sadDog from "../images/sadDog.jpg";
import poorPerson from "../images/homeless-man.jpg";
import happy from "../images/happy.jpg";

export const initialPosts = [
  {
    postId: "1",
    title: "Greece is in trouble",
    imgLink: greeceImage,
    content: "Greece finds itself at a crossroads, grappling with economic turmoil that threatens its stability and prosperity. Economically, the nation is still grappling with the repercussions of its debt crisis, which began over a decade ago. While Greece has made strides in reducing its deficit and implementing austerity measures, the impact of these policies has left deep scars on its population, with high unemployment rates and widespread poverty persisting. The COVID-19 pandemic has exacerbated these economic woes, leading to further strain on public finances and slowing the recovery process. Additionally, Greece's reliance on tourism, a sector severely affected by the pandemic, has underscored the vulnerability of its economic structure.\n\nPolitically and socially, Greece is also contending with significant pressures. The migration crisis has seen thousands of refugees and migrants arrive on Greek shores, stretching the country's resources and infrastructure. This has sparked social tensions and placed immense pressure on the government to find sustainable solutions while upholding humanitarian obligations. Furthermore, Greece's geopolitical landscape remains complex, with ongoing disputes with neighboring Turkey over territorial waters and energy exploration rights in the Eastern Mediterranean. These issues not only heighten regional instability but also require careful diplomatic navigation to prevent escalation into conflict. Together, these economic, social, and political challenges underscore the multifaceted troubles Greece is currently facing.",
    description: "Greece finds itself at a crossroads",
    authorName: "Manos Dimitriou"
  },
  {
    postId: "2",
    title: "Animals need your help",
    imgLink: sadDog,
    content: "Animals around the world are in urgent need of assistance. They face numerous threats to their survival, with habitat destruction being one of the most significant challenges. Deforestation, urbanization, and agricultural expansion are leading to the loss of natural habitats, forcing countless species out of their homes and disrupting their food sources. Climate change exacerbates these issues by altering ecosystems and disrupting migration patterns, making it harder for animals to find suitable living conditions. Additionally, pollution, including plastic waste and toxic chemicals, contaminates land and water, posing severe health risks to wildlife. The cumulative impact of these factors is pushing many species toward the brink of extinction, with some already lost forever.\n\nIn addition to environmental threats, animals also suffer from direct human actions such as poaching, hunting, and the illegal wildlife trade. Elephants, rhinos, and tigers are just a few examples of animals targeted for their tusks, horns, and skins. This illegal trade not only decimates animal populations but also fuels organized crime and undermines local communities that depend on wildlife tourism. To combat these issues, it is crucial for governments, conservation organizations, and individuals to work together. Efforts must focus on protecting natural habitats, enforcing anti-poaching laws, and promoting sustainable practices. Public awareness and education about the plight of animals can also drive positive change, encouraging people to support conservation initiatives and make more eco-friendly choices. By taking collective action, we can help ensure a future where animals can thrive in their natural environments.",
    description: "You are their ONLY hope",
    authorName: "Panos Dimitriou"
  },
  {
    postId: "3",
    title: "I am quite poor!",
    imgLink: poorPerson,
    content: "Facing financial hardship can be incredibly challenging. When you are struggling to make ends meet, everyday tasks and responsibilities can become overwhelming. The stress of not having enough money to cover basic needs like food, shelter, and healthcare can take a significant toll on one's mental and physical health. Moreover, the lack of financial resources can limit access to education and job opportunities, creating a vicious cycle that makes it difficult to improve one's situation. For many, the burden of debt and the pressure of living paycheck to paycheck are constant sources of anxiety and despair.\n\nDespite these challenges, finding ways to cope and seek support is crucial. Community resources, social services, and non-profit organizations can provide much-needed assistance and relief. It's important to reach out for help and explore options such as food banks, housing assistance programs, and financial counseling. Building a support network of friends and family can also offer emotional and practical support. While the path to financial stability may be long and arduous, taking small steps towards managing finances and seeking available resources can make a significant difference. It is vital to stay hopeful and resilient, as even in the toughest times, there are ways to find support and work towards a better future.",
    description: "Facing financial hardship can be incredibly challenging",
    authorName: "Marios Aggelopoulou"
  }
  ,
  {
    postId: "4",
    title: "New housing boom!",
    imgLink: happy,
    content: "The current housing market is experiencing a notable surge, driven by a combination of low interest rates, increased demand, and a recovering economy. Many people, particularly first-time homebuyers, are taking advantage of favorable mortgage conditions to purchase homes. This boom is reflected in rising property values and a competitive market where homes often sell quickly and above the asking price. The construction industry is also benefiting, with new housing developments springing up to meet the growing demand. This surge is not only revitalizing urban areas but also expanding suburban and rural regions, creating opportunities for economic growth and community development.\n\nHowever, this rapid growth in the housing market also presents challenges. The increased demand has led to a shortage of affordable housing, making it difficult for lower-income families to find suitable homes. Additionally, the competition can be daunting for buyers, leading to bidding wars and sometimes inflated prices. Policymakers and industry leaders are working to address these issues by encouraging the construction of affordable housing and implementing measures to ensure a balanced market. Despite these challenges, the housing boom is seen as a positive indicator of economic recovery and growth, promising new opportunities for homeowners and investors alike.",
    description: "The current housing market is experiencing a notable surge",
    authorName: "Kleftis Paliokleftis"
  },
];

export function getAllPosts() {
  let savedPosts = JSON.parse(localStorage.getItem("posts")) || [];
  
  // If no posts are saved, initialize with initialPosts
  if (savedPosts.length === 0) {
    localStorage.setItem("posts", JSON.stringify(initialPosts));
    savedPosts = initialPosts;
  }
  
  return savedPosts;
}

export default initialPosts;
