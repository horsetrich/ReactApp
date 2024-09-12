import React from 'react';

const projects = [
    { id: 1, title: 'Project 1', description: 'Description of Project', image: 'https://www.bing.com/images/search?view=detailV2&ccid=pV3k4qlA&id=9683999F9E68F450B3983F1214A9ED6D8620133A&thid=OIP.pV3k4qlAd_AVM7pgHWI2UAHaEK&mediaurl=https%3a%2f%2fwallpaperaccess.com%2ffull%2f773426.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.a55de4e2a94077f01533ba601d623650%3frik%3dOhMghm3tqRQSPw%26pid%3dImgRaw%26r%3d0&exph=2160&expw=3840&q=forest&simid=608053149626232582&FORM=IRPRST&ck=E8D12BBE29E7EF6F5E6AB74F9E88A961&selectedIndex=3&itb=0' },
    { id: 2, title: 'Project 2', description: 'Description of Project2', image: 'https://www.bing.com/images/search?view=detailV2&ccid=f5cZMyLP&id=2DED92D78F8B154118974D79D2F8BBC2F2A3025E&thid=OIP.f5cZMyLPihHFw_FJFJ-LVwHaE8&mediaurl=https%3a%2f%2fpixnio.com%2ffree-images%2f2017%2f10%2f12%2f2017-10-12-09-01-56.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.7f97193322cf8a11c5c3f149149f8b57%3frik%3dXgKj8sK7%252bNJ5TQ%26pid%3dImgRaw%26r%3d0&exph=3283&expw=4924&q=forest&simid=608050340720428530&FORM=IRPRST&ck=0FA97F78F14236009EFE714AB223D8E8&selectedIndex=2&itb=0'},
    { id: 3, title: 'Project 3', description: 'Description of Project3', image: 'https://www.bing.com/images/search?view=detailV2&ccid=D7%2fK1M%2fK&id=A3EC2569EEB542323F05D18C41ACA513B85CAC12&thid=OIP.D7_K1M_KAXx7LYums3OZdwHaEo&mediaurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.0fbfcad4cfca017c7b2d8ba6b3739977%3frik%3dEqxcuBOlrEGM0Q%26riu%3dhttp%253a%252f%252fwallpapercave.com%252fwp%252fCc9FIwm.jpg%26ehk%3dN6p%252bDidF1sfhNxg1FoI7do5wU%252bwlsQmWTuvhCgTIPTg%253d%26risl%3d%26pid%3dImgRaw%26r%3d0&exph=1600&expw=2560&q=forest&simid=607996760982052068&FORM=IRPRST&ck=5F9D18E769C2D9F38162AA01B0BE22BB&selectedIndex=7&itb=0'},

];

const Project = () => {
    return (
        <div>
            <h1>Projects</h1>
            {projects.map(project => (
                <div key={project.id}>
                    <img src={project.image} alt={project.title} />
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Project;