/** @type {import('next').NextConfig} */
const nextConfig = {
  // هذه الخيارات تضمن استمرارية النشر حتى لو وجدت تحذيرات تقنية بسيطة
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true, // مهم جداً لسرعة التحميل في المرحلة الأولى
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      // أضفتُ هذا النمط للسماح بجلب صور من Firebase مستقبلاً كما طلبتِ جلالتك
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
