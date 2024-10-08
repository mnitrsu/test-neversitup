import { useForm, SubmitHandler } from "react-hook-form";
import { IRegisterLoginForm } from "@/types/IRegisterLoginForm";
import { postAuthLogin } from "@/services/auth/login";
import { useRouter } from "next/router";
import Link from "next/link";
import Cookies from "js-cookie";
import { encode } from "@/utils";

const LoginPage = () => {
  const router = useRouter();
  const { query } = router;
  const { redirect } = query;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterLoginForm>();

  const onSubmit: SubmitHandler<IRegisterLoginForm> = (data) => {
    postAuthLogin(data)
      .then((res) => {
        const { username, access_token, statusCode, message } = res;
        if (username && access_token) {
          Cookies.set("login-information", encode(JSON.stringify(res)));
          if (redirect && redirect !== "[redirect]") {
            router.push(redirect.toString());
          } else {
            router.push("/todo");
          }
        } else {
          alert(`${statusCode}: ${message}`);
        }
      })
      .catch((e) => {
        alert(JSON.stringify(e));
      });
  };

  return (
    <div className="flex flex-col justify-center items-center h-full gap-4">
      <h1 className="text-5xl">login</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-4 items-center">
          <input
            type="text"
            className="border p-2 rounded-md"
            placeholder="username"
            {...register("username", { required: true })}
          />
          {errors.username && <span className="text-red-500 text-sm">username is required</span>}
        </div>
        <div className="flex gap-4 items-center">
          <input
            type="text"
            className="border p-2 rounded-md"
            placeholder="password"
            {...register("password", { required: true })}
          />
          {errors.password && <span className="text-red-500 text-sm">password is required</span>}
        </div>
        <button type="submit" className="border p-2 rounded-md mt-4">
          login <span className="text-red-500 text-xs">* ติด CORS</span>
        </button>
        <Link href="/register">
          <p className="text-center underline">register</p>
        </Link>
      </form>
    </div>
  );
};

export default LoginPage;
