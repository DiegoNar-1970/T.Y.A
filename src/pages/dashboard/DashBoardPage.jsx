import React from 'react';
import { FaRegFilePdf } from "react-icons/fa6";
import { LuUsers } from "react-icons/lu";
import { useDashboardData } from '../../hooks/useDashboadData';
import { QuickActions } from './aside/QuickActions';
import './dashboard.css';
import { CardInfo } from './header/CardInfo';
import { CardMainPdf } from './main/CardMainPdf';
import { CardMainTitle } from './main/CardMainTitle';

const DashBoardPage = () => {
  const data = useDashboardData();

  const formatedDate = (date) => {
    const createdAt = new Date(date);
    const now = new Date();
    const diffMs = now - createdAt;
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    return diffHours;
  };

  const getNamePdf = (path) => {
    return path?.split('pdfs/')[1] || 'Sin nombre';
  };

  const getRecentContracts = data?.getRecentContracts?.slice(0, 5) || [];

  return (
    <div className='dashboard h-full p-8 gap-7'>
      <section className="[grid-area:info] flex flex-col gap-5 ">
        <div className='flex flex-col ga-4'>
          <h1 className='font-bold text-[25px]'>Bienvenido al DashBoard</h1>
          <p className='font-extralight text-[13px] color-l-s'>
            Gestiona tus documentos PDF y consultas desde un solo lugar.
          </p>
        </div>

        <div className='flex justify-around gap-4 flex-wrap content-center '>
          <CardInfo
            title='Total De contratos'
            total={data?.newsContracts?.total_count || 0}
            totalPorHours={data?.newsContracts?.recent_count || 0}
            Icon={FaRegFilePdf}
          />
          <CardInfo
            title='Contratos Firmados'
            total={data?.countContAsigned?.total_asigned || 0}
            totalPorHours={data?.countContAsigned?.recentasigned || 0}
            Icon={FaRegFilePdf}
          />
          <CardInfo
            title='Contratos sin Firmar'
            total={data?.countContWithoutAsigned?.total_asigned || 0}
            totalPorHours={data?.countContWithoutAsigned?.recentasigned || 0}
            Icon={FaRegFilePdf}
          />
          <CardInfo
            title='Total de clientes'
            total={data?.countCustomer?.count_customer || 0}
            totalPorHours={data?.countCustomer?.news_customers || 0}
            Icon={LuUsers}
          />
        </div>
      </section>

      <section className="[grid-area:data] flex flex-col rounded-[10px] border border-gray-100 shadow-md gap-4 bg-white ">
        <CardMainTitle />
        {getRecentContracts.length > 0 ? (
          getRecentContracts.map((contract) => (
            <div key={contract?.id || Math.random()}>
              <CardMainPdf
                name={getNamePdf(contract?.path)}
                time={formatedDate(contract?.created_at)}
                data={contract}
              />
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 p-4">No hay contratos recientes.</p>
        )}
      </section>

      <section className="[grid-area:acces] h-full">
        <QuickActions />
      </section>
    </div>
  );
};

export default DashBoardPage;
