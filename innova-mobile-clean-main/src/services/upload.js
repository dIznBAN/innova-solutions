const IMGBB_KEY = '06e7312be7cd16b207344fba43e96449';

export const uploadToImgBB = async (uri) => {
  const filename = uri.split('/').pop();
  const match = /\.(\w+)$/.exec(filename);
  const type = match ? `image/${match[1]}` : 'image/jpeg';

  const formData = new FormData();
  formData.append('key', IMGBB_KEY);
  formData.append('image', { uri, name: filename, type });

  const res = await fetch('https://api.imgbb.com/1/upload', {
    method: 'POST',
    body: formData,
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  const data = await res.json();
  if (!data.success) throw new Error('Falha ao fazer upload da imagem');
  return data.data.url;
};
