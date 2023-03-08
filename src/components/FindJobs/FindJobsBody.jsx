import React from "react";
import JobList from "./JobList";
import JobDescription from "./JobDescription";


const FindJobsBody = () => {
  return (
    <div className=" px-[75px] m-auto py-10 md:py-5 relative lg:px-[50px] md:px-3">
      <h1 className=" text-3xl text-blue text-center font-bold pb-5">
        Hiring Now
      </h1>
      <div className=" flex gap-5 lg:flex-col-reverse">
        <JobList />
        <JobDescription
          title="IT Training – Centre Manager"
          company="CDDtech Academy"
          location="Lagos"
          duration="Full Time"
          salary="NGN 150,000 - 250,000"
          role="Job Function: Engineering & Technology"
          responsibilities="Ipsum velit non vulputate vitae vivamus libero varius. Velit, integer nibh at non aliquet feugiat amet, nulla. Lobortis odio lectus molestie dapibus elementum ornare. Ut odio risus aenean mollis et fermentum. At tellus nullam placerat dictumst. Amet neque tincidunt nunc felis lorem. At sollicitudin maecenas arcu, aenean. Quis ac sagittis nunc tellus, tristique nulla. Nam nisl consectetur ut diam. Ultrices augue sagittis, et etiam massa nunc, eget sit mauris."
          requirements="Ipsum velit non vulputate vitae vivamus libero varius. Velit, integer nibh at non aliquet feugiat amet, nulla. Lobortis odio lectus molestie dapibus elementum ornare. Ut odio risus aenean mollis et fermentum. At tellus nullam placerat dictumst. Amet neque tincidunt nunc felis lorem. At sollicitudin maecenas arcu, aenean. Quis ac sagittis nunc tellus, tristique nulla. Nam nisl consectetur ut diam. Ultrices augue sagittis, et etiam massa nunc, eget sit mauris."
          others="Ipsum velit non vulputate vitae vivamus libero varius. Velit, integer nibh at non aliquet feugiat amet, nulla. Lobortis odio lectus molestie dapibus elementum ornare. Ut odio risus aenean mollis et fermentum. At tellus nullam placerat dictumst. Amet neque tincidunt nunc felis lorem. At sollicitudin maecenas arcu, aenean. Quis ac sagittis nunc tellus, tristique nulla. Nam nisl consectetur ut diam. Ultrices augue sagittis, et etiam massa nunc, eget sit mauris."
        />
      </div>
    </div>
  );
};

export default FindJobsBody;
