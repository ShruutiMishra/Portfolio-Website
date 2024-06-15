document.addEventListener('DOMContentLoaded', function(){
    function showMoreProjects(){
        const projectGrid = document.querySelector('.my-project-grid');
    
        const newProjects = [
            {
                link: 'https://shruutimishra.github.io/Simon-Game/',
                imgSrc: './assets/images/Simon-game.png',
                title: 'Simon Game'
            },
            {
                link: 'https://shruutimishra.github.io/Tmkoc-characters/',
                imgSrc: './assets/images/tmkoc-character.png',
                title: 'Popular Show'
            },
            {
                link: 'https://shruutimishra.github.io/Memories-gallery/',
                imgSrc: './assets/images/memories-gallery.png',
                title: 'ChildHood Memories'
            },
            {
                link: 'https://shruutimishra.github.io/Cafe-menu/',
                imgSrc: './assets/images/Caffee.png',
                title: 'Cafe Menu'
            }
        ];
    
        newProjects.forEach(project =>{
            const projectsItem = document.createElement('a');
            projectsItem.href = project.link;
            projectsItem.target='_blank';
            projectsItem.className='project-item';
    
            const projectImage = document.createElement('img');
            projectImage.src = project.imgSrc;
            projectImage.alt = project.title;
            projectImage.className = 'project-image';
    
            const projectTitle = document.createElement('p');
            projectTitle.className = 'project-title';
            projectTitle.innerText = project.title;
    
            projectsItem.appendChild(projectImage);
            projectsItem.appendChild(projectTitle);
    
            projectGrid.appendChild(projectsItem);
        });
    
        const showMoreButton = document.querySelector('.show-more-button');
        showMoreButton.style.display = 'none';
    }
document.querySelector('.show-more-button').onclick = showMoreProjects;

});