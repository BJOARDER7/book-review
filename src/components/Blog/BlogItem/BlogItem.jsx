import PropTypes from 'prop-types';

const BlogItem = ({book}) => {
  const {author, publisher, bookName, description, image } = book;
  return (
    <tr>        
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{author}</div>
              <div className="text-sm opacity-50">{publisher}</div>
            </div>
          </div>
        </td>
        <td>
          {bookName}          
        </td>
        <td>{description}</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
  );
};

BlogItem.propTypes = {
  book: PropTypes.object
}

export default BlogItem;