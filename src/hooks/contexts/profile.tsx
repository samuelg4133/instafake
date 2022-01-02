import { createContext, useContext, useEffect, useRef, useState } from "react";

export type ProfileData = {
  name: string;
  email: string;
  telephone: string;
};

interface IProfileContext {
  emailInputRef: React.MutableRefObject<any>;
  handleSubmit(): void;
  isLoading: boolean;
  isSubmitted: boolean;
  nameInputRef: React.MutableRefObject<any>;
  profile: ProfileData;
  telephoneInputRef: React.MutableRefObject<any>;
}

const ProfileContext = createContext({} as IProfileContext);

export const ProfileProvider: React.FC = ({ children }) => {
  const [isLoading, setLoading] = useState(false);
  const [isSubmitted, setSubmitted] = useState(false);
  const [profile, setProfile] = useState({
    name: "Samuel",
    email: "samuel@example.com",
    telephone: "38999383855",
  } as ProfileData);
  const emailInputRef = useRef<any>(null);
  const nameInputRef = useRef<any>(null);
  const telephoneInputRef = useRef<any>(null);

  async function handleSubmit() {
    const data = {
      name: nameInputRef.current?.value || profile.name,
      email: emailInputRef.current?.value || profile.email,
      telephone: telephoneInputRef.current?.value || profile.telephone,
    } as ProfileData;

    setLoading(true);

    setTimeout(async () => {
      setLoading(false);
    }, 500);

    setProfile(data);

    setTimeout(async () => {
      setSubmitted(true);
    }, 1000);
  }

  useEffect(() => {
    setSubmitted(false);
  }, []);

  return (
    <ProfileContext.Provider
      value={{
        handleSubmit,
        emailInputRef,
        isLoading,
        isSubmitted,
        nameInputRef,
        profile,
        telephoneInputRef,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export function useProfile(): IProfileContext {
  const context = useContext(ProfileContext);

  if (!context) {
    throw new Error("useProfile must be used within an ProfileProvider");
  }

  return context;
}
