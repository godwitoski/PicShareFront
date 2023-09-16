import Photo from './Photo';

function PhotoList({ photos, removePost, addComment, editComment, removeComment }) {
  return photos.length ? (
    <ul className='photo-list'>
      {photos.map((photo) => {
        return (
          <li key={photo.idEntry}>
            <Photo
              photo={photo}
              removePost={removePost}
              removeComment={removeComment}
              addComment={addComment}
              editComment={editComment}
            />
          </li>
        );
      })}
    </ul>
  ) : (
    <p>No hay publicaciones...</p>
  );
}

export default PhotoList;
