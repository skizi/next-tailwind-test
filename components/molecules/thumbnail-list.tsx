import { Thumbnail } from '../atoms/thumbnail';

export const ThumbnailList = ({ thumbnails }) => {
	return (
		<div className="-ml-2 w-screen flex flex-nowrap justify-start sm:justify-center overflow-x-scroll scroll-smooth py-2">
			{thumbnails?.map((item) => {
				return (
					<Thumbnail
						key={item.id}
						title={item.title}
						outline={item.releaseYear}
					/>
				);
			})}
		</div>
	);
};
