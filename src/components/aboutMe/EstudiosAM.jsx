import React, { useState } from "react";
import { FaPaste } from "react-icons/fa";

export default function EstudiosAM() {
  const [alertVisibleEmail, setAlertVisibleEmail] = useState(false);
  const [alertVisiblePhone, setAlertVisiblePhone] = useState(false);
  const [alertVisibleUbi, setAlertVisibleUbi] = useState(false);
  const [alertDownload, setAlertDownload] = useState(false);

  const pasteEmail = () => {
    const MyEmail = "ivanntonio@gmail.com";
    navigator.clipboard
      .writeText(MyEmail)
      .then(() => {
        setAlertVisibleEmail(true);
        setTimeout(() => {
          setAlertVisibleEmail(false);
        }, 3000);
      })
      .catch((error) => {
        console.error("error al copiar el texto", error);
      });
  };

  const pastePhone = () => {
    const MyPhone = "+52 246 4934 066";
    navigator.clipboard
      .writeText(MyPhone)
      .then(() => {
        setAlertVisiblePhone(true);
        setTimeout(() => {
          setAlertVisiblePhone(false);
        }, 3000);
      })
      .catch((error) => {
        console.error("error al copiar el texto", error);
      });
  };

  const pasteUbication = () => {
    const MyInfo = "Iván Antonio Varela Hernandez, Tlaxcala, tlax";
    navigator.clipboard
      .writeText(MyInfo)
      .then(() => {
        setAlertVisibleUbi(true);
        setTimeout(() => {
          setAlertVisibleUbi(false);
        }, 3000);
      })
      .catch((error) => {
        console.error("error al copiar el texto", error);
      });
  };

  return (
    <>
      <div className="mockup-window border mx-10">
        <div>
          <div className="hero backdrop-blur-3xl bg-black/30 ">
            <div className="hero-content  flex-col lg:flex-row">
              <img
                src="https://softitlan-storage.s3.us-east-2.amazonaws.com/images/index-soloblanco.png"
                className="max-w-sm rounded-lg shadow-2xl size-48"
              />
              <div>
                <h1 className="text-5xl font-bold">Softitlan</h1>
                <h4>2022 - 2024</h4>
                <div>
                  <p className="py-6">Desarrollo web</p>
                </div>
              </div>
            </div>
          </div>
          <div className="hero backdrop-blur-3xl bg-black/65 ">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <img
                src="https://img.genially.com/5dc8c95212b18f0fd81ca1ca/644ca1d6-16fa-45d0-aca5-83934f804537.png"
                className="max-w-sm rounded-lg shadow-2xl size-full"
              />
              <div className="text-right">
                <h1 className="text-5xl font-bold ">
                  Universidad Autonoma de Tlaxcala
                </h1>
                <h4>2020 - 2024</h4>
                <div>
                  <p className="py-6">Estudio de ingeniería en computación</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="w-screen">
        <div class="grid gap-4 lg:gap-8 md:grid-cols-3 p-5 pt-20">
          <div class="relative p-6 rounded-2xl bg-white shadow dark:bg-purple-900">
            <div class="space-y-2">
              <div class="flex items-center space-x-2 rtl:space-x-reverse text-sm font-medium text-gray-500 dark:text-gray-400">
                <span>Número Telefonico</span>
              </div>

              <div class="lg:text-3xl dark:text-gray-100">+52 246 4934 066</div>

              <div class="flex items-center space-x-1 rtl:space-x-reverse text-sm font-medium ">
                <button
                  className="btn btn-outline btn-xs btn-success "
                  onClick={pastePhone}
                >
                  <FaPaste />
                  Copiar
                </button>
                {alertVisiblePhone && (
                  <div className="toast toast-end z-10">
                    <div className="alert alert-warning">
                      <span>Numero telefonico copiado</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div class="relative p-6 rounded-2xl bg-white shadow dark:bg-purple-900">
            <div class="space-y-2">
              <div class="flex items-center space-x-2 rtl:space-x-reverse text-sm font-medium text-gray-500 dark:text-gray-400">
                <span>Correo electronico</span>
              </div>

              <div class="lg:text-3xl dark:text-gray-100">
                ivanntonio@gmail.com
              </div>

              <div class="flex items-center space-x-1 rtl:space-x-reverse text-sm font-medium ">
                <div class="flex items-center space-x-1 rtl:space-x-reverse text-sm font-medium text-green-600">
                  <button
                    className="btn btn-outline btn-xs btn-success"
                    onClick={pasteEmail}
                  >
                    <FaPaste />
                    Copiar
                  </button>
                  {alertVisibleEmail && (
                    <div className="toast toast-end z-10">
                      <div className="alert alert-warning">
                        <span>Correo electronico copiado</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div class="relative p-6 rounded-2xl bg-white shadow dark:bg-purple-900">
            <div class="space-y-2">
              <div class="flex items-center space-x-2 rtl:space-x-reverse text-sm font-medium text-gray-500 dark:text-gray-400">
                <span>Ubicación</span>
              </div>

              <div class="lg:text-3xl dark:text-gray-100">Tlaxcala, tlax</div>

              <div class="flex items-center space-x-1 rtl:space-x-reverse text-sm font-medium text-green-600">
                <div class="flex items-center space-x-1 rtl:space-x-reverse text-sm font-medium text-green-600">
                  <button
                    className="btn btn-outline btn-xs btn-success"
                    onClick={pasteUbication}
                  >
                    <FaPaste />
                    Copiar
                  </button>
                  {alertVisibleUbi && (
                    <div className="toast toast-end z-10">
                      <div className="alert alert-warning">
                        <span>Información copiada</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div class="relative p-6 rounded-2xl bg-white shadow dark:bg-purple-800">
            <div class="space-y-2">
              <div class="flex items-center space-x-2 rtl:space-x-reverse text-sm font-medium text-gray-500 dark:text-gray-400">
                <span>Redes sociales</span>
              </div>
              <div class="grid grid-cols-4 md:gap-24 text-3xl dark:text-gray-100">
                <button className="btn btn-outline btn-success rounded-full btn-info">
                  FB
                </button>
                <button className="btn btn-outline btn-success rounded-full btn-info">
                  TW
                </button>
                <button className="btn btn-outline btn-success rounded-full btn-info">
                  LI
                </button>
                <button className="btn btn-outline btn-success rounded-full btn-info">
                  GH
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
