// rename in ./images folder's directory and files

const fs = require('fs');

const root = 'images';

const directories = fs.readdirSync(root);

// check directories in ./images

// circular function for rename
function rename(path, root = '', depth = 0){
    // check .DS_Store
    if(path === '.DS_Store') return;

    let newPath = `${path}`;
    let newName = ''
    if (path === 'images' || root === 'images'){
        newPath = path;
        newName = path.split('/')[path.split('/').length-1];
    }else{
        newName = `${depth}`;
    }
    let ext = '';
    
    // check is directory or file
    const isDirectory = fs.statSync(path).isDirectory();
    // if directory, recursive
    if(isDirectory){
        // if directory, rename
        // console.log('dir',newName)

        const files = fs.readdirSync(newPath);
        files.forEach((file, i) => {
            if (file === '.DS_Store' || file === '.ds_store') return;
            rename(`${newPath}/${file}`, newPath, i);
        });   
        // fs.renameSync(`${path}`, `${newPath}`).then(()=>{
        //     console.log(`${path} -> ${newPath}`);

        // )});

    }else{
        // if file, rename
        if (path === '.DS_Store' || path === '.ds_store') return;
        
        ext = path.split('.')[path.split('.').length-1];

        newName = `${depth}.${ext}`;
        if(path.includes('리뷰')){
            newName = `review_${depth}.${ext}`;
        }
    }

    console.log(`${path} //// ${root} -> ${newName}`);
    // fs.renameSync(`${root}/${path}`, `${root}/${newName}`);
    if(root === '') return;
    fs.renameSync(`${path}`, `${root}/${newName}`);
}

rename(root);