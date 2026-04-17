/*
 * LoanCalculator — แบบฟอร์มคำนวณสินเชื่อบ้าน
 * Design: Red Ribbon style — white/red theme, Kanit headings, Sarabun body
 * Features: เงินเดือน, ระยะเวลาผ่อน, อัตราดอกเบี้ย, คำนวณยอดกู้สูงสุด, ยอดผ่อน/เดือน, ดอกเบี้ยรวม
 */

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  Calculator,
  Banknote,
  Clock,
  Percent,
  TrendingUp,
  Wallet,
  PiggyBank,
  Phone,
  MessageCircle,
  Info,
} from "lucide-react";

function formatNumber(num: number): string {
  return num.toLocaleString("th-TH", { maximumFractionDigits: 0 });
}

export default function LoanCalculator() {
  const [salary, setSalary] = useState<number>(15000);
  const [years, setYears] = useState<number>(30);
  const [interestRate, setInterestRate] = useState<number>(6.5);
  const [debtPerMonth, setDebtPerMonth] = useState<number>(0);

  const results = useMemo(() => {
    // ธนาคารอนุมัติผ่อนไม่เกิน 40% ของรายได้ หักหนี้ที่มีอยู่
    const maxMonthlyPayment = salary * 0.4 - debtPerMonth;
    if (maxMonthlyPayment <= 0) {
      return {
        maxLoan: 0,
        monthlyPayment: 0,
        totalInterest: 0,
        totalPayment: 0,
        maxMonthlyPayment: 0,
      };
    }

    // คำนวณยอดกู้สูงสุดจากยอดผ่อนต่อเดือนที่รับได้
    const monthlyRate = interestRate / 100 / 12;
    const totalMonths = years * 12;

    // สูตร: PV = PMT * [(1 - (1+r)^-n) / r]
    let maxLoan: number;
    if (monthlyRate === 0) {
      maxLoan = maxMonthlyPayment * totalMonths;
    } else {
      maxLoan =
        maxMonthlyPayment *
        ((1 - Math.pow(1 + monthlyRate, -totalMonths)) / monthlyRate);
    }

    // คำนวณยอดผ่อนต่อเดือนจริง (ใช้ยอดกู้สูงสุด)
    let monthlyPayment: number;
    if (monthlyRate === 0) {
      monthlyPayment = maxLoan / totalMonths;
    } else {
      monthlyPayment =
        (maxLoan * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
        (Math.pow(1 + monthlyRate, totalMonths) - 1);
    }

    const totalPayment = monthlyPayment * totalMonths;
    const totalInterest = totalPayment - maxLoan;

    return {
      maxLoan: Math.max(0, Math.round(maxLoan)),
      monthlyPayment: Math.max(0, Math.round(monthlyPayment)),
      totalInterest: Math.max(0, Math.round(totalInterest)),
      totalPayment: Math.max(0, Math.round(totalPayment)),
      maxMonthlyPayment: Math.max(0, Math.round(maxMonthlyPayment)),
    };
  }, [salary, years, interestRate, debtPerMonth]);

  // คำนวณเงินเหลือโดยประมาณ (ธนาคารประเมินบ้านสูงกว่า → กู้ได้เกิน)
  const estimatedCashBack = useMemo(() => {
    // สมมติธนาคารประเมินราคาบ้านสูงกว่ายอดกู้ 20%
    return Math.round(results.maxLoan * 0.2);
  }, [results.maxLoan]);

  return (
    <section id="calculator" className="py-16 md:py-24 bg-white relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14"
        >
          <span className="inline-block text-sm font-semibold tracking-wider uppercase mb-2 text-[#C41E3A]">
            คำนวณสินเชื่อ
          </span>
          <h2
            className="text-2xl md:text-4xl font-bold mb-3 text-gray-900"
            style={{ fontFamily: "'Kanit', sans-serif" }}
          >
            คำนวณยอดกู้ & ค่าผ่อนบ้าน
          </h2>
          <p className="max-w-2xl mx-auto text-base text-gray-500">
            กรอกข้อมูลเงินเดือนและเงื่อนไขที่ต้องการ
            ระบบจะคำนวณยอดกู้สูงสุดและค่าผ่อนต่อเดือนให้อัตโนมัติ
          </p>
          <div className="w-16 h-1 mx-auto mt-4 rounded-full bg-[#C41E3A]" />
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-6 lg:gap-8">
            {/* ===== INPUT FORM ===== */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-3 bg-[#F8F9FA] rounded-2xl p-6 md:p-8 border border-gray-100"
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-[#C41E3A] text-white rounded-xl flex items-center justify-center">
                  <Calculator className="w-5 h-5" />
                </div>
                <h3
                  className="text-lg font-bold text-gray-900"
                  style={{ fontFamily: "'Kanit', sans-serif" }}
                >
                  กรอกข้อมูลของคุณ
                </h3>
              </div>

              <div className="space-y-6">
                {/* เงินเดือน */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <Banknote className="w-4 h-4 text-[#C41E3A]" />
                    เงินเดือน (บาท/เดือน)
                  </label>
                  <input
                    type="range"
                    min={8000}
                    max={100000}
                    step={1000}
                    value={salary}
                    onChange={(e) => setSalary(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#C41E3A]"
                  />
                  <div className="flex justify-between mt-2">
                    <span className="text-xs text-gray-400">8,000</span>
                    <div className="bg-white border-2 border-[#C41E3A] text-[#C41E3A] px-4 py-1.5 rounded-lg">
                      <span
                        className="text-lg font-bold"
                        style={{ fontFamily: "'Kanit', sans-serif" }}
                      >
                        {formatNumber(salary)}
                      </span>
                      <span className="text-xs ml-1 text-gray-500">
                        บาท/เดือน
                      </span>
                    </div>
                    <span className="text-xs text-gray-400">100,000</span>
                  </div>
                </div>

                {/* หนี้สินต่อเดือน */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <Wallet className="w-4 h-4 text-[#C41E3A]" />
                    ภาระหนี้ต่อเดือน (บาท) — เช่น ผ่อนรถ, บัตรเครดิต
                  </label>
                  <input
                    type="range"
                    min={0}
                    max={30000}
                    step={500}
                    value={debtPerMonth}
                    onChange={(e) => setDebtPerMonth(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#C41E3A]"
                  />
                  <div className="flex justify-between mt-2">
                    <span className="text-xs text-gray-400">0</span>
                    <div className="bg-white border-2 border-gray-300 text-gray-700 px-4 py-1.5 rounded-lg">
                      <span
                        className="text-lg font-bold"
                        style={{ fontFamily: "'Kanit', sans-serif" }}
                      >
                        {formatNumber(debtPerMonth)}
                      </span>
                      <span className="text-xs ml-1 text-gray-500">
                        บาท/เดือน
                      </span>
                    </div>
                    <span className="text-xs text-gray-400">30,000</span>
                  </div>
                </div>

                {/* ระยะเวลาผ่อน */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <Clock className="w-4 h-4 text-[#C41E3A]" />
                    ระยะเวลาผ่อน (ปี)
                  </label>
                  <div className="flex gap-2 flex-wrap">
                    {[10, 15, 20, 25, 30, 35].map((y) => (
                      <button
                        key={y}
                        onClick={() => setYears(y)}
                        className={`px-4 py-2.5 rounded-lg text-sm font-bold transition-all ${
                          years === y
                            ? "bg-[#C41E3A] text-white shadow-lg shadow-red-200"
                            : "bg-white text-gray-600 border border-gray-200 hover:border-[#C41E3A] hover:text-[#C41E3A]"
                        }`}
                        style={{ fontFamily: "'Kanit', sans-serif" }}
                      >
                        {y} ปี
                      </button>
                    ))}
                  </div>
                </div>

                {/* อัตราดอกเบี้ย */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <Percent className="w-4 h-4 text-[#C41E3A]" />
                    อัตราดอกเบี้ย (% ต่อปี)
                  </label>
                  <input
                    type="range"
                    min={3}
                    max={9}
                    step={0.25}
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#C41E3A]"
                  />
                  <div className="flex justify-between mt-2">
                    <span className="text-xs text-gray-400">3%</span>
                    <div className="bg-white border-2 border-[#C41E3A] text-[#C41E3A] px-4 py-1.5 rounded-lg">
                      <span
                        className="text-lg font-bold"
                        style={{ fontFamily: "'Kanit', sans-serif" }}
                      >
                        {interestRate.toFixed(2)}
                      </span>
                      <span className="text-xs ml-1 text-gray-500">
                        % ต่อปี
                      </span>
                    </div>
                    <span className="text-xs text-gray-400">9%</span>
                  </div>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="mt-6 flex items-start gap-2 bg-amber-50 border border-amber-200 rounded-lg p-3">
                <Info className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <p className="text-xs text-amber-700 leading-relaxed">
                  * การคำนวณนี้เป็นการประมาณเบื้องต้น
                  ยอดกู้จริงขึ้นอยู่กับการพิจารณาของธนาคาร
                  ทีมงานวิวต้นโฮมพร้อมช่วยประเมินให้ฟรี
                </p>
              </div>
            </motion.div>

            {/* ===== RESULTS ===== */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-2 space-y-4"
            >
              {/* ยอดกู้สูงสุด */}
              <div className="bg-gradient-to-br from-[#C41E3A] to-[#8B1528] rounded-2xl p-6 text-white shadow-xl shadow-red-200/50">
                <div className="flex items-center gap-2 mb-1">
                  <TrendingUp className="w-5 h-5 text-red-200" />
                  <span className="text-sm font-medium text-red-100">
                    ยอดกู้สูงสุด (โดยประมาณ)
                  </span>
                </div>
                <div
                  className="text-3xl md:text-4xl font-black"
                  style={{ fontFamily: "'Kanit', sans-serif" }}
                >
                  {formatNumber(results.maxLoan)}
                </div>
                <div className="text-sm text-red-200">บาท</div>
              </div>

              {/* ค่าผ่อนต่อเดือน */}
              <div className="bg-white rounded-2xl p-5 border-2 border-gray-100 shadow-sm">
                <div className="flex items-center gap-2 mb-1">
                  <Wallet className="w-4 h-4 text-[#C41E3A]" />
                  <span className="text-sm font-medium text-gray-500">
                    ค่าผ่อนต่อเดือน
                  </span>
                </div>
                <div
                  className="text-2xl font-bold text-gray-900"
                  style={{ fontFamily: "'Kanit', sans-serif" }}
                >
                  {formatNumber(results.monthlyPayment)}{" "}
                  <span className="text-sm font-normal text-gray-400">
                    บาท/เดือน
                  </span>
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  ไม่เกิน 40% ของรายได้ (
                  {formatNumber(results.maxMonthlyPayment)} บาท)
                </div>
              </div>

              {/* ดอกเบี้ยรวม */}
              <div className="bg-white rounded-2xl p-5 border-2 border-gray-100 shadow-sm">
                <div className="flex items-center gap-2 mb-1">
                  <Percent className="w-4 h-4 text-amber-500" />
                  <span className="text-sm font-medium text-gray-500">
                    ดอกเบี้ยรวมตลอดสัญญา
                  </span>
                </div>
                <div
                  className="text-2xl font-bold text-amber-600"
                  style={{ fontFamily: "'Kanit', sans-serif" }}
                >
                  {formatNumber(results.totalInterest)}{" "}
                  <span className="text-sm font-normal text-gray-400">
                    บาท
                  </span>
                </div>
              </div>

              {/* ยอดชำระรวม */}
              <div className="bg-white rounded-2xl p-5 border-2 border-gray-100 shadow-sm">
                <div className="flex items-center gap-2 mb-1">
                  <PiggyBank className="w-4 h-4 text-blue-500" />
                  <span className="text-sm font-medium text-gray-500">
                    ยอดชำระรวมทั้งหมด
                  </span>
                </div>
                <div
                  className="text-2xl font-bold text-gray-900"
                  style={{ fontFamily: "'Kanit', sans-serif" }}
                >
                  {formatNumber(results.totalPayment)}{" "}
                  <span className="text-sm font-normal text-gray-400">
                    บาท
                  </span>
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  ผ่อน {years} ปี ({years * 12} งวด)
                </div>
              </div>

              {/* เงินเหลือโดยประมาณ */}
              {results.maxLoan > 0 && (
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-5 border-2 border-green-200">
                  <div className="flex items-center gap-2 mb-1">
                    <Banknote className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-medium text-green-700">
                      เงินเหลือติดมือ (โดยประมาณ)
                    </span>
                  </div>
                  <div
                    className="text-2xl font-bold text-green-600"
                    style={{ fontFamily: "'Kanit', sans-serif" }}
                  >
                    +{formatNumber(estimatedCashBack)}{" "}
                    <span className="text-sm font-normal text-green-500">
                      บาท
                    </span>
                  </div>
                  <div className="text-xs text-green-600/70 mt-1">
                    * กรณีธนาคารประเมินราคาบ้านสูงกว่ายอดกู้
                  </div>
                </div>
              )}

              {/* CTA */}
              <div className="space-y-2 pt-2">
                <a
                  href="tel:0812345678"
                  className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#C41E3A] text-white font-bold rounded-xl hover:bg-[#a01830] transition-all shadow-lg text-base"
                  style={{ fontFamily: "'Kanit', sans-serif" }}
                >
                  <Phone className="w-5 h-5" />
                  ปรึกษาฟรี 081-234-5678
                </a>
                <a
                  href="https://line.me/ti/p/~viewtonhome"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#06C755] text-white font-bold rounded-xl hover:bg-[#05a847] transition-all shadow-lg text-base"
                  style={{ fontFamily: "'Kanit', sans-serif" }}
                >
                  <MessageCircle className="w-5 h-5" />
                  แอดไลน์ให้ช่วยประเมิน
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
