import {HiEyeOff } from 'react-icons/hi';

const Profile = () => {
    const profileData = {
        firstName: "Sabina Izatul",
        lastName: "Zahrani",
        email: "sabinaizatulzahrani@gmail.com",
        phoneNumber: "+62895391403539",
        address: "Jln. Kenangan 123",
        bio: "Embrace your dreams, believe in yourself, and let your journey light up the world✨.",
      };
    
      const handleSave = () => {
        alert("Changes saved!");
      };
      
    return (
    <div className="px-7 py-5">
      <h1 className="font-bold text-3xl text-primary mb-6">Profile</h1>
      <div className="bg-secondary rounded-2xl mb-6 flex flex-col">
        <div className="p-6 flex-1">
          <div className="flex flex-col lg:flex-row items-center lg:justify-center lg:mx-12">
            <div className="mb-6 lg:mb-0 lg:mx-12">
              <img src="./src/assets/avatar2.png" alt="avatar" className="rounded-full block h-auto w-full max-w-full bg-[#797596]" />
            </div>
            <div className="text-center md:text-left lg:mx-12 space-y-2">
              <h1 className="text-2xl text-white">Hi,
                <span className="font-bold"> {`${profileData.firstName} ${profileData.lastName}`}</span>
              </h1>
              <p className="text-white">{profileData.email}</p>
              <p className="text-white">{profileData.phoneNumber}</p>
              <p className="text-white">{profileData.address}</p>
              <p className="text-white mt-2">{profileData.bio}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Form Edit Profil */}
        <div className="flex flex-col">
          <div className="bg-contentbox rounded-2xl p-8 mb-6">
            <label className="block font-bold text-primary mb-2">Edit profile</label>
            <div className="relative">
              <button className="inline-flex items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border cursor-pointer rounded-lg border-border ring-border bg-primary text-white hover:bg-[#0b0a14] py-2 px-3" type="button">
                <span className="inline-flex justify-center items-center w-6 h-6">
                  <svg viewBox="0 0 24 24" width="16" height="16" className="inline-block">
                    <path fill="currentColor" d="M9,16V10H5L12,3L19,10H15V16H9M5,20V18H19V20H5Z"></path>
                  </svg>
                </span>
                <span className="px-2">Upload</span>
              </button>
            </div>
            <div className="text-xs text-primary">Max 500kb</div>
          </div>
          <div className="bg-contentbox p-8 rounded-2xl">
            <div className="mb-4 flex flex-col space-x-0 space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <div className="w-full">
                <label className="block text-primary font-bold mb-2">First Name:</label>
                <input type="text" placeholder="Firstname" className="input"/>
              </div>
              <div className="w-full">
                <label className="block text-primary font-bold mb-2">Last Name:</label>
                <input type="text" placeholder="Lastname" className="input"/>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-primary font-bold mb-2">Username:</label>
              <input type="text" placeholder="Input your username here" className="input"/>
            </div>
            <div className="mb-4">
              <label className="block text-primary font-bold mb-2">Email:</label>
              <input type="email" placeholder="Input your email here" className="input"/>
            </div>
            <div className="mb-4">
              <label className="block text-primary font-bold mb-2">Phone Number:</label>
                <input type="text" placeholder="Input your phone number here" className="input"/>
            </div>
            <div className="mb-4">
              <label className="block text-primary font-bold mb-2">Address:</label>
              <textarea placeholder="Input your address here" className="input resize-none"/>
            </div>
            <div className="mb-4">
              <label className="block text-primary font-bold mb-2">Bio:</label>
              <textarea placeholder="Input your bio here" className="w-full h-32 input resize-none"/>
            </div>
            <div className="mt-auto">
              <button onClick={handleSave} className="py-2 px-4 btn btn-primary">Save</button>
            </div>
          </div>
        </div>
        {/* Form Ganti Password */}
        <div className="flex flex-col">
          <div className="bg-contentbox p-8 rounded-2xl">
            <div className="mb-4">
              <label className="block text-primary font-bold mb-2">Current Password:</label>
              <div className="flex relative">
                <input type="password" placeholder="Input your current password here" className="input"/>
                <HiEyeOff className="eye-icon"/>
              </div>
            </div>
            <hr className="my-6 -mx-8"/>
            <div className="mb-4">
              <label className="block text-primary font-bold mb-2">New Password:</label>
              <div className="flex relative">
                <input type="password" placeholder="Input your new password here" className="input"/>
                <HiEyeOff className="eye-icon"/>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-primary font-bold mb-2">Confirm Password:</label>
              <div className="flex relative">
                <input type="password" placeholder="Confirm your new password here" className="input"/>
                <HiEyeOff className="eye-icon"/>
              </div>
            </div>
            <div className="mt-auto">
              <button onClick={handleSave} className="py-2 px-4 btn btn-primary">Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Profile;