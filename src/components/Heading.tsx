type HeadingProps = {
    num: string,
    heading: string
    }

const Heading: React.FC<HeadingProps> = ({ num, heading }) => {
  return (
    <div className="flex items-center space-x-4 ">
        <p className="hidden1 logo font-mono text-xl text-primary-color font-light">{num}</p>
        <p className="hidden1 logo text-heading-color text-3xl font-bold min-w-fit">{heading}</p>
        <div className='hidden1 logo pt-0 w-[40%] h-[1px] bg-gray-600'>
            
        </div>
    </div>
  )
}

export default Heading