import Link from "next/link"
import { LuGithub } from "react-icons/lu"
import { FiExternalLink } from "react-icons/fi";

type ProjectShowcaseProps = {
    name: string,
    description: string,
    path: string,
    linkToProject: string,
    linkToGithub: string,
    technologies: string[],
    leftAligned: boolean
}

const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ name, description, path, linkToProject, linkToGithub, technologies, leftAligned }) => {
    const mdClasses = leftAligned ? "md:col-start-4" : "md:col-start-1";
    const lgClasses = leftAligned ? "lg:col-start-7" : "lg:col-start-1";
    const colSpanClasses = leftAligned ? "col-span-full" : "md:col-span-7";
    const textAlignClasses = leftAligned ? "text-end" : "text-start";


  return (
  

        <div className="mt-14  grid grid-cols-12 relative min-h-[100%} flex items-center" >
            <div className={`contentArea flex flex-col justify-center min-h-full md:h-fit box-border p-4 md:bg-transparent bg-[#112240] opacity-90 md:opacity-100 row-span-full absolute z-20 sm:col-start-1 sm:col-span-full  ${mdClasses} ${lgClasses} ${colSpanClasses} ${textAlignClasses}`}>
                <p className="text-primary-color text-xs font-mono mb-1">Featured Project</p>
                <Link href={linkToProject} target="_blank" className="text-2xl font-bold text-heading-color mb-3 cursor-pointer hover:text-primary-color transition-colors duration-150">{name}</Link>
                <div className="md:shadow-lg min-w-fit md:bg-[#112240] rounded-md md:py-6 md:px-4 text-[#8892af]">
                    <p>{description}</p>
                </div>
                <ul className={`flex ${leftAligned ? 'justify-end' : 'justify-start'} text-sm font-mono space-x-6 mt-2 text-[#8892af]`}>
                    {technologies.map((el) => {
                        return <li key={el}>{el}</li>
                    })}
                </ul>
                <div className={`flex ${leftAligned ? 'justify-end' : 'justify-start'} space-x-4 text-xl text-[#d2d3d7]  mt-2`}>
                    <Link target="_blank" className="transition-colors hover:text-primary-color duration-200" href={linkToGithub}>
                        <LuGithub></LuGithub>
                    </Link>
                    <Link target="_blank" className="transition-colors hover:text-primary-color duration-200" href={linkToProject}>
                        <FiExternalLink></FiExternalLink>
                    </Link>
                </div>
            </div>
            <div className={`projectImage justify-start relative z-0 sm:col-start-1 sm:col-span-full ${leftAligned ? 'md:col-start-1' : 'md:col-start-6'} ${leftAligned ? 'md:col-span-8': 'md:col-span-full'} overflow-hidden w-full h-auto`}>
                
                <div className={`projectImgWrapper  relative flex items-center`}>
                    <Link target="_blank" className="flex w-fit" href={linkToProject}>
                        <img src={path} alt="Project" className="h-full object-contain grayscale" />
                    </Link>
                </div>
            </div>
        </div>
  )
}

export default ProjectShowcase