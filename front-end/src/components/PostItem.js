import React from 'react'

export default function PostItem() {
  return (
    <div className="post-item">
      <p className="post-content">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt dolorem officia nemo, magnam, voluptate
        deleniti perspiciatis doloremque molestiae est, illo quis possimus assumenda omnis commodi aliquam nisi eos
        non eius.
      </p>
      <div className="post-footer">
        <div className="post-infos">
          <span>by Hoang Nguyen</span>
          <span>Date: 19/06/2022</span>
        </div>
        <div className="post-edit-delete">
          <span>Edit</span>
          <span>Delete</span>
          <span className="delete-question">Are you sure?</span>
          <span>Yes</span>
          <span>No</span>
        </div>
      </div>
      <div className="post-edit-form">
        <form className="edit-form">
          <textarea name="content" id="content" type="text" className="content" placeholder="What's happening?">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe odio corrupti illo velit possimus, accusamus facere porro id quis iure magni, rem asperiores, quae sunt ut dolorum temporibus corporis labore.
          </textarea>
          <div className="btn-container">
            <button className="btn" type="button">Update</button>
            <button className="btn" type="button">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  )
}
