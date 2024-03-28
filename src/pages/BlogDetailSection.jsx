import React, { useEffect, useState } from "react";
import Blog11 from "../assets/images/blog/11.jpg";
import Blog16 from "../assets/images/blog/16.jpg";
import Blog18 from "../assets/images/blog/18.jpg";
import { useParams } from "react-router-dom";
import {
<<<<<<< HEAD
  getAllBlog,
  getBlogComments,
  useCreateBlogComment,
=======
    getAllBlog,
    getBlogComments,
    useCreateBlogComment,
>>>>>>> 7e55cb0 (url changed)
} from "../react-query/api/Blog";
import Loading from "../UI/Loading";
import { Bounce, toast } from "react-toastify";

const BlogDetailSection = () => {
<<<<<<< HEAD
  const { blogId } = useParams();
  const [comment, setComment] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
  });
  const { isLoading, error, data, refetch } = getAllBlog(
    `http://35.154.95.255:8000/api/news/getBlog/${blogId}`
  );
  const {
    isLoading: blogCommentLoader,
    error: blogErr,
    data: blogComment,
    refetch: commentRefetch,
  } = getBlogComments(`http://35.154.95.255:8000/api/news/comment/${blogId}`);

console.log('====================================');
console.log("ALL BLOG COMMENTS: ",blogComment);
console.log('====================================');

  const {
    mutateAsync: createBlogCommentMutation,
    isLoading: createBlogLoader,
  } = useCreateBlogComment(); // Get the mutation function

  //   console.log("Blog id: ", mutation);

  useEffect(() => {
    refetch();
    commentRefetch();
  }, []);

  if (isLoading || createBlogLoader) {
    return <Loading />;
  }

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      console.log("Submitted: ", comment);
      const commentData = {
        comment,
        url: `http://35.154.95.255:8000/api/news/comment/${blogId}`,
      };

      const data = await createBlogCommentMutation(commentData);

      if (data.status === 201) {
        return toast.success(`✔ ${data.message}!`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
      if (data.status === 400) {
        return toast.error(`✔ ${data.error}!`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
    } catch (error) {
      return toast.error(`✔ ${error.message}!`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  return (
    <>
      <div className="our-blog blog-innner-page blog-list blog-details">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-xs-12">
              <div className="single-blog">
                <div className="image">
                  <img
                    src={`http://35.154.95.255:8000/uploads/${data.image}`}
                    alt=""
                  />
                </div>
                <ul>
                  <li>
                    <i className="flaticon-comments" />
                    <a href="#" className="tran3s">
                      13
                    </a>
                  </li>
                  <li>
                    <i className="flaticon-heart" />
                    <a href="#" className="tran3s">
                      3
                    </a>
                  </li>
                </ul>
                <h4>{data.title}</h4>
                <p>{data.description}</p> <br />
                <p>
                  For those aspiring to excel in exams such as JEE Main and
                  Advanced, the dream of securing a spot in prestigious
                  institutions like IIT, DTU, BITS Pilani, IIITs, and NITs is
                  shared by many. Despite the intense competition, only a
                  handful of students manage to secure admission to their
                  desired colleges.
                </p>{" "}
                <br />
                <p>
                  Coaching institutes play a crucial role in exam preparation,
                  and in recent years, one institute has stood out for producing
                  some of the highest scorers in JEE exams across India –
                  FIITJEE. Recognized as India's premier institute for
                  competitive exams like JEE and NEET, FIITJEE has become
                  synonymous with excellence in coaching and has played a
                  pivotal role in shaping the academic journeys of numerous
                  successful candidates.
                </p>
              </div>{" "}
              {/* /.single-blog */}
              <div className="comment-area">
                <div className="comment-title clearfix">
                  <h4 className="float-left">
                    Comments <span className="s-bg-color">4</span>
                  </h4>
                  <ul className="float-right">
                    <li>
                      <a href="#" className="tran3s">
                        <i className="fa fa-facebook" aria-hidden="true" /> Like
                      </a>
                    </li>
                    <li>
                      <a href="#" className="tran3s">
                        <i className="fa fa-twitter" aria-hidden="true" /> Tweet
                      </a>
                    </li>
                    <li>
                      <a href="#" className="tran3s">
                        <i className="fa fa-google-plus" aria-hidden="true" />{" "}
                        Share
                      </a>
                    </li>
                  </ul>
                </div>{" "}
                {/* /.comment-title */}
                <div className="single-commnet clearfix">
                    {
                        blogComment?.length>0 && blogComment.map((val) =>(
                            <>
                                 <img src={Blog16} alt="" className="float-left" />
                  <div className="comment float-left border">
                    <div className="clearfix">
                      <h6 className="float-left">{val?.name}</h6>
                      <span className="float-right">3 day ago</span>
                    </div>
                    <p>
                            {val.description}
                    </p>
                    <ul>
                      <li>
                        <a href="#">
                          <i className="flaticon-heart" /> 32
                        </a>{" "}
                      </li>
                    </ul>
                  </div>
                            </>
                        ))
                    }
                </div>{" "}
                {/* /.single-commnet */}
                {/* <div className="single-commnet clearfix">
=======
    const { blogId } = useParams();
    const [comment, setComment] = useState({
        name: "",
        email: "",
        phone: "",
        description: "",
    });
    const { isLoading, error, data, refetch } = getAllBlog(
        `http://35.154.95.255:8000/api/news/getBlog/${blogId}`
    );
    const {
        isLoading: blogCommentLoader,
        error: blogErr,
        data: blogComment,
        refetch: commentRefetch,
    } = getBlogComments(`http://35.154.95.255:8000/api/news/comment/${blogId}`);

    console.log("====================================");
    console.log("ALL BLOG COMMENTS: ", blogComment);
    console.log("====================================");

    const {
        mutateAsync: createBlogCommentMutation,
        isLoading: createBlogLoader,
    } = useCreateBlogComment(); // Get the mutation function

    //   console.log("Blog id: ", mutation);

    useEffect(() => {
        refetch();
        commentRefetch();
    }, []);

    if (isLoading || createBlogLoader) {
        return <Loading />;
    }

    const submitForm = async (e) => {
        e.preventDefault();
        try {
            console.log("Submitted: ", comment);
            const commentData = {
                comment,
                url: `http://35.154.95.255:8000/api/news/comment/${blogId}`,
            };

            const data = await createBlogCommentMutation(commentData);

            if (data.status === 201) {
                return toast.success(`✔ ${data.message}!`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
            }
            if (data.status === 400) {
                return toast.error(`✔ ${data.error}!`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
            }
        } catch (error) {
            return toast.error(`✔ ${error.message}!`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }
    };

    return (
        <>
            <div className="our-blog blog-innner-page blog-list blog-details">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-xs-12">
                            <div className="single-blog">
                                <div className="image">
                                    <img
                                        src={`http://35.154.95.255:8000/uploads/${data.image}`}
                                        alt=""
                                    />
                                </div>
                                <ul>
                                    <li>
                                        <i className="flaticon-comments" />
                                        <a href="#" className="tran3s">
                                            13
                                        </a>
                                    </li>
                                    <li>
                                        <i className="flaticon-heart" />
                                        <a href="#" className="tran3s">
                                            3
                                        </a>
                                    </li>
                                </ul>
                                <h4>{data.title}</h4>
                                <p>{data.description}</p> <br />
                                <p>
                                    For those aspiring to excel in exams such as
                                    JEE Main and Advanced, the dream of securing
                                    a spot in prestigious institutions like IIT,
                                    DTU, BITS Pilani, IIITs, and NITs is shared
                                    by many. Despite the intense competition,
                                    only a handful of students manage to secure
                                    admission to their desired colleges.
                                </p>{" "}
                                <br />
                                <p>
                                    Coaching institutes play a crucial role in
                                    exam preparation, and in recent years, one
                                    institute has stood out for producing some
                                    of the highest scorers in JEE exams across
                                    India – FIITJEE. Recognized as India's
                                    premier institute for competitive exams like
                                    JEE and NEET, FIITJEE has become synonymous
                                    with excellence in coaching and has played a
                                    pivotal role in shaping the academic
                                    journeys of numerous successful candidates.
                                </p>
                            </div>{" "}
                            {/* /.single-blog */}
                            <div className="comment-area">
                                <div className="comment-title clearfix">
                                    <h4 className="float-left">
                                        Comments{" "}
                                        <span className="s-bg-color">4</span>
                                    </h4>
                                    <ul className="float-right">
                                        <li>
                                            <a href="#" className="tran3s">
                                                <i
                                                    className="fa fa-facebook"
                                                    aria-hidden="true"
                                                />{" "}
                                                Like
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="tran3s">
                                                <i
                                                    className="fa fa-twitter"
                                                    aria-hidden="true"
                                                />{" "}
                                                Tweet
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="tran3s">
                                                <i
                                                    className="fa fa-google-plus"
                                                    aria-hidden="true"
                                                />{" "}
                                                Share
                                            </a>
                                        </li>
                                    </ul>
                                </div>{" "}
                                {/* /.comment-title */}
                                <div className="single-commnet clearfix">
                                    {blogComment?.length > 0 &&
                                        blogComment.map((val) => (
                                            <>
                                                <img
                                                    src={Blog16}
                                                    alt=""
                                                    className="float-left"
                                                />
                                                <div className="comment float-left border">
                                                    <div className="clearfix">
                                                        <h6 className="float-left">
                                                            {val?.name}
                                                        </h6>
                                                        <span className="float-right">
                                                            3 day ago
                                                        </span>
                                                    </div>
                                                    <p>{val.description}</p>
                                                    <ul>
                                                        <li>
                                                            <a href="#">
                                                                <i className="flaticon-heart" />{" "}
                                                                32
                                                            </a>{" "}
                                                        </li>
                                                    </ul>
                                                </div>
                                            </>
                                        ))}
                                </div>{" "}
                                {/* /.single-commnet */}
                                {/* <div className="single-commnet clearfix">
>>>>>>> 7e55cb0 (url changed)
                  <img src={Blog18} alt="" className="float-left" />
                  <div className="comment float-left border">
                    <div className="clearfix">
                      <h6 className="float-left">Josef Doe</h6>
                      <span className="float-right">5 day ago</span>
                    </div>
                    <p>
                      Optimistic assumptions are made by proponents of
                      ideologies such as transhumanism and singularitarianism,
                      which view technological development as generally having
                      beneficial effects for the society and the human
                      condition. In these ideologies, technological development
                      is morally good. Some critics see these ideologies as
                      examples of scientism and techno-utopianism and fear the
                      notion.
                    </p>
                    <ul>
                      <li>
                        <a href="#">
                          <i className="flaticon-heart" /> 12
                        </a>{" "}
                      </li>
                    </ul>
                  </div>{" "}
                </div> */}
<<<<<<< HEAD
                {/* /.single-commnet */}
              </div>{" "}
              {/* /.comment-area */}
              <div className="reply-comment-form">
                <h4>Reply A Comment</h4>
                <form action="#">
                  <div className="row">
                    <div className="col-sm-6">
                      <input
                        type="text"
                        placeholder="Your Name"
                        value={comment.name}
                        onChange={(e) =>
                          setComment({ ...comment, name: e.target.value })
                        }
                      />
                      <input
                        type="email"
                        placeholder="Your Email"
                        value={comment.email}
                        onChange={(e) =>
                          setComment({ ...comment, email: e.target.value })
                        }
                      />
                      <input
                        type="text"
                        placeholder="Phone Number"
                        value={comment.phone}
                        onChange={(e) =>
                          setComment({ ...comment, phone: e.target.value })
                        }
                      />
                    </div>
                    <div className="col-sm-6">
                      <textarea
                        placeholder="Your Comment"
                        value={comment.description}
                        onChange={(e) =>
                          setComment({
                            ...comment,
                            description: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="clearfix">
                    <input
                      type="submit"
                      defaultValue="Submit"
                      className="float-right s-bg-color"
                      onClick={submitForm}
                    />
                  </div>
                </form>
                {/* {isBlogError && <div>Error in Blog</div>}
                {isBlogLoading && <div>Loading Blog...</div>} */}
              </div>{" "}
              {/* /.reply-comment-form */}
            </div>{" "}
            {/* /.col- */}
            <div className="col-md-4 col-sm-6 col-xs-12 theme-sidebar">
              <form action="#" className="sidebar-search">
                <input type="text" placeholder="Search" />
                <button className="tran3s">
                  <i className="flaticon-search" />
                </button>
              </form>
              <div className="sidebar-categories">
                <h4>Top Recommendation</h4>
                <ul>
                  <li>
                    <a href="#" className="tran3s">
                      JEE Advanced
                    </a>
                  </li>
                  <li>
                    <a href="#" className="tran3s">
                      JEE Mains
                    </a>
                  </li>
                  <li>
                    <a href="#" className="tran3s">
                      NTSE
                    </a>
                  </li>
                  <li>
                    <a href="#" className="tran3s">
                      VVM
                    </a>
                  </li>
                  <li>
                    <a href="#" className="tran3s">
                      Others
                    </a>
                  </li>
                </ul>
              </div>{" "}
              {/* /.sidebar-categories */}
              <div className="sidebar-keyword">
                <h4>Keyword</h4>
                <ul className="clearfix">
                  <li>
                    <a href="#" className="tran3s">
                      VVM
                    </a>
                  </li>
                  <li>
                    <a href="#" className="tran3s">
                      NMIC
                    </a>
                  </li>
                  <li>
                    <a href="#" className="tran3s">
                      IPM
                    </a>
                  </li>
                  <li>
                    <a href="#" className="tran3s">
                      JEE Mains
                    </a>
                  </li>
                  <li>
                    <a href="#" className="tran3s">
                      JEE Advanced
                    </a>
                  </li>
                </ul>
              </div>{" "}
              {/* /.sidebar-keyword */}
            </div>{" "}
            {/* /.theme-sidebar */}
          </div>{" "}
          {/* /.row */}
        </div>{" "}
        {/* /.container */}
      </div>
    </>
  );
=======
                                {/* /.single-commnet */}
                            </div>{" "}
                            {/* /.comment-area */}
                            <div className="reply-comment-form">
                                <h4>Reply A Comment</h4>
                                <form action="#">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <input
                                                type="text"
                                                placeholder="Your Name"
                                                value={comment.name}
                                                onChange={(e) =>
                                                    setComment({
                                                        ...comment,
                                                        name: e.target.value,
                                                    })
                                                }
                                            />
                                            <input
                                                type="email"
                                                placeholder="Your Email"
                                                value={comment.email}
                                                onChange={(e) =>
                                                    setComment({
                                                        ...comment,
                                                        email: e.target.value,
                                                    })
                                                }
                                            />
                                            <input
                                                type="text"
                                                placeholder="Phone Number"
                                                value={comment.phone}
                                                onChange={(e) =>
                                                    setComment({
                                                        ...comment,
                                                        phone: e.target.value,
                                                    })
                                                }
                                            />
                                        </div>
                                        <div className="col-sm-6">
                                            <textarea
                                                placeholder="Your Comment"
                                                value={comment.description}
                                                onChange={(e) =>
                                                    setComment({
                                                        ...comment,
                                                        description:
                                                            e.target.value,
                                                    })
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="clearfix">
                                        <input
                                            type="submit"
                                            defaultValue="Submit"
                                            className="float-right s-bg-color"
                                            onClick={submitForm}
                                        />
                                    </div>
                                </form>
                                {/* {isBlogError && <div>Error in Blog</div>}
                {isBlogLoading && <div>Loading Blog...</div>} */}
                            </div>{" "}
                            {/* /.reply-comment-form */}
                        </div>{" "}
                        {/* /.col- */}
                        <div className="col-md-4 col-sm-6 col-xs-12 theme-sidebar">
                            <form action="#" className="sidebar-search">
                                <input type="text" placeholder="Search" />
                                <button className="tran3s">
                                    <i className="flaticon-search" />
                                </button>
                            </form>
                            <div className="sidebar-categories">
                                <h4>Top Recommendation</h4>
                                <ul>
                                    <li>
                                        <a href="#" className="tran3s">
                                            JEE Advanced
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="tran3s">
                                            JEE Mains
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="tran3s">
                                            NTSE
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="tran3s">
                                            VVM
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="tran3s">
                                            Others
                                        </a>
                                    </li>
                                </ul>
                            </div>{" "}
                            {/* /.sidebar-categories */}
                            <div className="sidebar-keyword">
                                <h4>Keyword</h4>
                                <ul className="clearfix">
                                    <li>
                                        <a href="#" className="tran3s">
                                            VVM
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="tran3s">
                                            NMIC
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="tran3s">
                                            IPM
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="tran3s">
                                            JEE Mains
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="tran3s">
                                            JEE Advanced
                                        </a>
                                    </li>
                                </ul>
                            </div>{" "}
                            {/* /.sidebar-keyword */}
                        </div>{" "}
                        {/* /.theme-sidebar */}
                    </div>{" "}
                    {/* /.row */}
                </div>{" "}
                {/* /.container */}
            </div>
        </>
    );
>>>>>>> 7e55cb0 (url changed)
};

export default BlogDetailSection;
