import { motion } from "framer-motion";
import { Globe, Users, Wrench, GraduationCap, Award, Rocket, CheckCircle2 } from "lucide-react";
import Card from "../../components/Card";

const Expertise = () => {
    return (
        <section className="py-10 bg-gray-50 px-6">
            <motion.h2
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-bold md:ml-25 mb-10 text-blue-900">
                Our Expertise
            </motion.h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
                <Card
                    icon={<Users className="w-12 h-12 text-indigo-600" />}
                    title="ERP Consulting"
                    description="We provide consulting services to streamline operations and achieve business goals."
                />
                <Card
                    icon={<Globe className="w-12 h-12 text-indigo-600" />}
                    title="Implementation Support"
                    description="Personalized implementation ensuring smooth transition and maximum benefits."
                />
                <Card
                    icon={<Wrench className="w-12 h-12 text-indigo-600" />}
                    title="Customization & Integration"
                    description="Tailoring ERPNext to your needs with seamless integration into workflows."
                />
                <Card
                    icon={<GraduationCap className="w-12 h-12 text-indigo-600" />}
                    title="Training & Support"
                    description="Comprehensive training and ongoing support to empower your team."
                />
            </div>
        </section>
    );
};

export default Expertise;