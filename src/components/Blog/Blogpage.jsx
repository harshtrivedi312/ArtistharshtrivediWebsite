import React from 'react';
import BlogTwoColumns from '../Blog/BlogTwoColums';
import BlogSidebar from '../Blog/BlogSidebar';


const BlogRightSidebar = () => {
    return (
        <React.Fragment>


            <div className="blog-details-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            {/* BlogTwoColumns */}
                            <BlogTwoColumns />
                        </div>

                        <div className="col-lg-4">
                            {/* Blog Sidebar */}
                            <div className="blog-right-sidebar">
                                <BlogSidebar />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default BlogRightSidebar;