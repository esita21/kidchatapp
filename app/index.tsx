import { Redirect } from "expo-router";
import { useAuth } from "@/services/authService";

export default function Index() {
  const { user } = useAuth();
  return (
    user?(
    <Redirect href="/main"/>
    ) : (
      <Redirect href="/auth/login" />
    )
    
  );
}
