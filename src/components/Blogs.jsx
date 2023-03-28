import React from 'react'

const Blogs = () => {

    const blogs = [
        { 
            'id': 1,
            'title': 'Blog 1',
            'desc': "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quaerat consectetur.",
            'coverImg': 'https://edteam-media.s3.amazonaws.com/courses/original/9cfa2a82-e1d9-4903-849f-b3d09804a703.png'
        },

        { 
            'id': 1,
            'title': 'Blog 2',
            'desc': "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quaerat consectetur.",
            'coverImg': 'https://edteam-media.s3.amazonaws.com/courses/original/9cfa2a82-e1d9-4903-849f-b3d09804a703.png'
        },

        { 
            'id': 1,
            'title': 'Blog 3',
            'desc': "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quaerat consectetur.",
            'coverImg': 'https://edteam-media.s3.amazonaws.com/courses/original/9cfa2a82-e1d9-4903-849f-b3d09804a703.png'
        }
    ]

  return (
    <div className="w-full bg-[#f9f9f9f9] py-[50px]">
        <div className="max-w-[1240px] mx-auto">
            <div className="grid gap-8 px-4 text-black lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 ss:grid-cols-1">

                {blogs.map((blog) => 
                
                <div className="overflow-hidden bg-white rounded-x1 drop-shadow-md">
                    <img className="object-cover w-full h-56" src={blog.coverImg} alt="" />
                    <div className="p-8">
                        <h3 className="my-1 text-2xl font-bold">{blog.title}</h3>
                        <p className="text-xl text-gray-600">{blog.desc}</p>
                    </div>
                </div>

                )}
                
            </div>
        </div>
    </div>
  )
}

export default Blogs