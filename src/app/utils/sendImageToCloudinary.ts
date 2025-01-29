import { v2 as cloudinary } from 'cloudinary';
export const sendImageToCloudinary = () => {
  cloudinary.config({
    cloud_name: 'dq8vzqokh',
    api_key: '869264894135851',
    api_secret: 'PLOB9mUgi41XJySvai2xHJltbzI', // Click 'View API Keys' above to copy your API secret
  });

  cloudinary.uploader.upload(
    'https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg',
    { public_id: 'olympic_flag' },
    function (error, result) {
      console.log(result);
    },
  );
};
