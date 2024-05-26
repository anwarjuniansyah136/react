import React from 'react'
import StoryViwer from '../../Components/StoryComponents/StoryViwer'

const Story = () => {
    const story = [
        {
            image: "https://2.bp.blogspot.com/-5dh-Z6OLRMs/UXiTPMb_AuI/AAAAAAAAAEo/PNOKoGsbkNw/s1600/Gambar-Kupu-Kupu.jpg"
        },
        {
            image: "https://4.bp.blogspot.com/-UOSsZO9CyPA/Udic_EOPdsI/AAAAAAAAAxs/A6Up0QH1HqA/s1600/Mewarnai+Gambar+Anak+Muslim.jpg"
        },
        {
            image: "https://gurune.net/wp-content/uploads/2019/09/500.jpg"
        },
        {
            image: "https://tse1.mm.bing.net/th?id=OIP.ttFy6lHzORjz8tMlZqH5UQHaFL&pid=Api&P=0&h=180"
        },
        {
            image: "https://tse4.mm.bing.net/th?id=OIP.T8iH59DpNRRgUZNnnCtpyQHaFj&pid=Api&P=0&h=180"
        }
    ]
  return (
    <div>
        <StoryViwer stories={story}/>
    </div>
  )
}

export default Story